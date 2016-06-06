module.exports = function(){
	var config = {

		//ts files we are gonna use
		allTs: './app1/**/*.ts',
		//output path to where all compile ts files will be transpiled
		tsOutputPath: './app1/',
		typings: './typings/**/*.ts'
	}
	return config;
}