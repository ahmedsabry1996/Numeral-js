// load a locale
numeral.register('locale', 'ar', {
    delimiters: {
        thousands: ' ',
        decimal: ','
    },
    abbreviations: {
        thousand: 'ألف',
        million: 'مليون',
        billion: 'مليار',
        trillion: 'تريليون'
    },
    ordinal : function (number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: '€'
    }
});

// switch between locales
numeral.locale('ar');
