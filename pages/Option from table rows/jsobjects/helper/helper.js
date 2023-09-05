export default {
	getOptions: () => {
		return Table1.selectedRows.map(item => ({
			label: item.name,
			value: item.email
		}))
	}
}