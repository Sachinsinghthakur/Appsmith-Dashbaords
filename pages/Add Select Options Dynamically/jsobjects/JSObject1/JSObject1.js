export default {
	initial_options: () => {
			return [
  {
    "label": "blue",
    "value": "blue"
  },
  {
    "label": "green",
    "value": "green"
  },
  {
    "label": "red",
    "value": "red"
  },
	{
    "label": "other",
    "value": "other"
  }
];
		
	},

	Customized_option_submit: async () => {
		let exists = false;
    if (!appsmith.store.selectOptions) storeValue('selectOptions',this.initial_options());
		for (let i=0; i<appsmith.store.selectOptions.length;i++){
			console.log('option ' + i + ': ' + appsmith.store.selectOptions[i].value);
			if (appsmith.store.selectOptions[i].value==Input1.text.toLowerCase()) {
				showAlert('Value already exists!','error');
				exists = true;
				break;
			}
		}
		if (exists == false) {
			storeValue('newValue',Input1.text.toLowerCase());
			await storeValue('selectOptions', [...(appsmith.store.selectOptions), {
			"label": Input1.text.toLowerCase(),
			"value": Input1.text.toLowerCase()
		}] );
			
		}
		closeModal('other_model');
	}
}