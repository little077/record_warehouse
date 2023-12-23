const { ofetch } = require('ofetch');

class AutoWebpackPlugin {
	constructor(options) {
		this.options = options;
	}
	apply(compiler) {
		compiler.hooks.afterEmit.tapAsync('autoPlugin', async (compilation, callback) => {
			try {
				const result= await ofetch(this.options.url, {
					method: this.options.method|| "POST",
					body: this.options.body,
          params:this.options.params,
				});
        console.log(result)
			} catch (e) {
				console.log(e);
			}
			callback();
		});
	}
}

module.exports = AutoWebpackPlugin;
