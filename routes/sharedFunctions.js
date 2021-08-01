'use strict';

function clean(object) {
	Object
		.entries(object)
		.forEach(([k, v]) => {
			if (v && typeof v === 'object') {
				clean(v);
			}
			if (v && typeof v === 'object' && !Object.keys(v).length || v === "" || v === "\"" + ""  + "\"") {
				if (Array.isArray(object)) {
						object.splice(k, 1);
				} else {
						delete object[k];
				}
			}
		});
	return object;
}

module.exports = {
	clean: clean
}
