import { Client, Account, Databases } from "appwrite";

const client = new Client()
    .setEndpoint("https://sfo.cloud.appwrite.io/v1")
    .setProject("694393c800267141aafe");

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };
