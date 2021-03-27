import * as mongodb from 'mongodb';

export class MongoDB {
	private url: string;
	private database_name: string;

	private database: any;
	private client: any;
	private collections: {[key: string]: any} = {};

	constructor(host: string, port: string, database: string) {
		this.url = `mongodb://${host}:${port}`;
		this.database_name = database;
	}

	public async connect(): Promise<void> {
		this.client = new mongodb.MongoClient(this.url, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});

		return new Promise((resolve, reject) => {
			this.client.connect((err) => {
				if (err)
					reject(err);
				
				this.database = this.client.db(this.database_name);

				resolve(null);
			});
		});
	}

	public async get(collection: string, id: string): Promise<{[key: string]: any}> {
		if (!this.collections[collection])
			this.collections[collection] = this.database.collection(collection);
		
		return new Promise((resolve, reject) => {
			this.collections[collection].find({_id: id}).toArray((err, docs) => {
				if (err)
					reject(err);
				
				if (docs.length)
					resolve(docs[0]);
				resolve(null);
			});
		});
	}

	public async insert(collection: string, data: {[key: string]: any}) {
		if (!this.collections[collection])
			this.collections[collection] = this.database.collection(collection);

		return new Promise((resolve, reject) => {
			this.collections[collection].insertOne(data, function (err, result) {
				if (err)
					reject(err);
				
				resolve(null);
			})
		});
	}

	public async update(collection: string, id: string, data: {[key: string]: any}) {
		if (!this.collections[collection])
			this.collections[collection] = this.database.collection(collection);

		return new Promise((resolve, reject) => {
			this.collections[collection].replaceOne({_id: id}, data, function (err, result) {
				if (err)
					reject(err);
				
				resolve(null);
			});
		});
	}

	public async delete(collection: string, id: string) {
		if (!this.collections[collection])
			this.collections[collection] = this.database.collection(collection);
		
		return new Promise((resolve, reject) => {
			this.collections[collection].deleteOne({_id: id}, (err) => {
				if (err)
					reject(err);
				
				resolve(null);
			});
		});
	}
}