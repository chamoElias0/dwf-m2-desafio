import { PelisCollection, Peli } from "./models";

class PelisController {
	peliculas: PelisCollection;
	constructor() {
		this.peliculas = new PelisCollection();
	}

	async get(options: any): Promise<any> {
		if (options.id) {
			return await this.peliculas.getById(options.id);
		}
		if (options.search) {
			return await this.peliculas.search(options.search);
		}
		if (options.empty) {
			return await this.peliculas.getAll();
		}
	}

	add(peli: Peli): Promise<boolean> {
		return this.peliculas.add(peli);
	}
}
export { PelisController };