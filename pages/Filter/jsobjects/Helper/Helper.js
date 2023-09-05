export default {
	getMapping: (data) => {
		return Array.from(new Set(data.map(item => item.Category))).map(cat => ({
			label: cat,
			value: cat,
		}));
	},
	getData: () => {
		let filteredData = this.getMapping(fetch_filtered_data.data);
		let defaultData = this.getMapping(fetch_data.data);
		return filteredData.length > 0 ? filteredData : defaultData;
	}
}