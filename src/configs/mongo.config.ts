import { ConfigService } from "@nestjs/config";
import { TypegooseModuleOptions } from "nestjs-typegoose";

export const getMongoConfig = async (ConfigService: ConfigService): Promise<TypegooseModuleOptions> => {
	return {
		uri: getMongoString(ConfigService),
		...getMongoOptions()
	};
};

const getMongoString = (configService: ConfigService) => 
	'mongodb://' +
		configService.get('MONGO_LOGIN') +
		':' +
		configService.get('MONGO_PASSWORD') +
		'@' +
		configService.get('MONGO_HOST') +
		':' +
		configService.get('MONGO_PORT') +
		'/' +
		configService.get('MONGO_AUTHDATABASE');


const getMongoOptions = () => ({
	
});