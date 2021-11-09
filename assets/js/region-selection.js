var regionStateInfo = {
	"NCR": {
        "No Province": {
            "Caloocan": [""],
            "Las Piñas": [""],
            "Makati": [""],
            "Malabon": [""],
            "Mandaluyong": [""],
            "Marikina": [""],
            "Muntinlupa": [""],
            "Navotas": [""],
            "Parañaque": [""],
            "Pasay": [""],
            "Pasig": [""],
            "Pateros": [""],
            "San Juan": [""],
            "Taguig": [""],
            "Valenzuela": [""],
        },
		"Manila": {
            "Manila": [""]
        }
	},

	"CAR": {
		"Abra": {
            "Bucay": [""],"La Paz": [""]
        },
		"Apayao": {
            "Calanasan": [""], "Conner": [""]
        },
		"Benguet": {"La Trinidad": [""]
        },
		"Ifugao": {
            "Asipulo": [""], "Lagawe": [""]
        },
		"Kalinga": {
            "Balbalan": [""], "Rizal": [""]
        },
		"Mountain Province": {
            "Bauko": [""], 
            "Sadanga": [""]
        }
	},

	"Region 1": {
		"Ilocos Norte": {
            "Burgos": [""], "Laoag": [""]
        },
		"Ilocos Sur": {
            "Burgos": [""], "Vigan": [""]
        },
		"La Union": {
            "Burgos": [""], "San Fernando": [""]
        },
		"Pangasinan": {
            "Alaminos": [""], "Dagupan": [""]
        }
	},

	"Region 2": {
		"Batanes": {
            "Basco": [""], "Sabtang": [""]
        },
		"Cagayan": {
            "Buguey": [""], "Enrile": [""]
        },
		"Isabela": {
            "Burgos": [""], "Ilagan": [""]
        },
		"Nueva Vizcaya": {
            "Bambang": [""], "Kasibu": [""]
        },
		"Quirino": {
            "Aglipay": [""], "Saguday": [""]
        }
	},

	"Region 3": {
		"Aurora": {
            "Baler": [""], "San Luis": [""]
        },
		"Bataan": {
            "Balanga": [""], "Samal": [""]
        },
		"Bulacan": {
            "Malolos": [""], "San Miguel": [""]
        },
		"Nueva Ecija": {
            "Palayan": [""], "San Isidro": [""]
        },
		"Pampanga": {
            "Angeles": [""], "San Fernando": [""]
        },
		"Tarlac": {
            "La Paz": [""], "Tarlac": [""]
        },
		"Zambales": {
            "Iba": [""], "Olongapo": [""]
        }
	},

	"Region 4A": {
		"Batangas": {
            "Batangas": [""], "Lipa": [""]
        },
		"Cavite": {
            "Imus": [""], "Kawit": [""]
        },
		"Laguna": {
            "Calamba": [""], "Santa Cruz": [""]
        },
		"Quezon": {
            "Lucena": [""], "Quezon": [""]
        },
		"Rizal": {
            "Antipolo": [""], "San Mateo": [""]
        },
	},

	"MIMAROPA": {
		"Mindoro Occidental": {
            "Mamburao": [""]
        },
		"Mindoro Oriental": {
            "Calapan": [""]
        },
		"Marinduque": {
            "": [""]
        },
		"Romblon": {
            "": [""]
        },
		"Palawan": {
            "El Nido": [""], "Puerto Princesa": [""]
        }
	},

    "Region V": {

	},
	"Region VI": {

	},
	"Region VII": {

	},
	"Region VIII": {

	},
	"Region IX": {

	},
	"Region X": {

	},
	"Region XI": {

	},
	"Region XII": {

	},
	"Region XIII": {

	},
	"BARMM": {

	}
}

window.onload = function () {
    var regionSel = document.getElementById('regionSel');
    var provinceSel = document.getElementById('provinceSel');
    var citySel = document.getElementById('citySel');
    // var barangaySel = document.getElementById('barangaySel');

    for (var region in regionStateInfo) {
        regionSel.options[regionSel.options.length] = new Option(region, region);
    }

    regionSel.onchange = function () {
        provinceSel.length = 1;
        citySel.length = 1;
        // barangaySel.length = 1;

        if (this.selectedIndex < 1) return;

        for (var province in regionStateInfo[this.value]) {
            provinceSel.options[provinceSel.options.length] = new Option(province, province);
        }
    }

    provinceSel.onchange = function () {
        citySel.length = 1;
        // barangaySel.length = 1;

        if (this.selectedIndex < 1) return;

        for (var city in regionStateInfo[regionSel.value][this.value]) {
            citySel.options[citySel.options.length] = new Option(city, city);
        }
    }

    // citySel.onchange = function () {
    //     barangaySel.length = 1;

    //     if (this.selectedIndex < 1) return;

    //     var barangay = regionStateInfo[regionSel.value][provinceSel.value][this.value];
    //     for (var i = 0; i < barangay; i++) {
    //         barangaySel.options[barangaySel.options.length] = new Option(barangay[i], barangay[i]);
    //     }
    // }
}