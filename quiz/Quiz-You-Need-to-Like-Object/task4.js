function travelingIndonesia(arr, emoney) {
    const cityMap = {
        'Yogyakarta': 0,
        'Semarang': 1,
        'Surabaya': 2,
        'Denpasar': 3
    };
    
    const transportCost = {
        'Pesawat': 275000,
        'Kereta': 250000,
        'Bis': 225000
    };
    
    const discount = {
        'OVO': 0.15,
        'Dana': 0.10,
        'Gopay': 0.05,
        'Cash': 0
    };
    
    let result = [];
    
    for (let entry of arr) {
        let [name, ...journey] = entry.split('-');
        let totalCost = 0;
        
        for (let i = 0; i < journey.length - 1; i++) {
            let fromCity = journey[i];
            let toCity = journey[i + 1];
            let transport = journey[journey.length - 1];
            
            let cost = transportCost[transport];
            let discountAmount = cost * discount[emoney];
            totalCost += cost - discountAmount;
            
            result.push({
                name: name,
                departureCity: fromCity,
                destinationCity: toCity,
                transport: transport,
                totalCost: totalCost
            });
        }
    }
    
    return result;
}

// TEST CASES
console.log(travelingIndonesia(['Danang-Yogyakarta-Semarang-Bis', 'Alif-Denpasar-Surabaya-Kereta', 'Bahari-Semarang-Denpasar-Pesawat'], 'OVO'));
console.log(travelingIndonesia(['Shafur-Surabaya-Yogyakarta-Kereta', 'Taufik-Semarang-Surabaya-Pesawat', 'Alex-Yogyakarta-Semarang-Kereta'], 'Dana'));
console.log(travelingIndonesia(['Andika-Denpasar-Surabaya-Bis', 'Katy-Surabaya-Denpasar-Pesawat'], 'Gopay'));
console.log(travelingIndonesia(['Putra-Denpasar-Yogyakarta-Pesawat'], 'Cash'));
console.log(travelingIndonesia([], 'Cash')); // []
