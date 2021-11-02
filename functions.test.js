const stringlength = (str) => {
    if(str.length > 1 && str.length <= 10){
        return str.length;
    }else {
        throw new Error('The string must be more than one and less than ten characters');
    }
}

const reverseString = (str) => res = str.split("").reverse().join("");

const Calculator = {
    Add(x,y) {
        return x+y;
    },

    Substract(x,y) {
        return x-y;
    },

    Multiply(x,y) {
        return x*y;
    },

    Divide(x,y) {
        return x/y;
    }

}


it('explain should return 7', () => {
    expect(stringlength('explain')).toBe(7);
});
    
it('google should return elgoog', () => {
    expect(reverseString('google')).toMatch('elgoog');
});

describe('Calculator Add Tests', () => {
    it('1 + 1 should return 2', () => {
        expect(Calculator.Add(1,1)).toBe(2);
    })
    it('2 + 2 should return 4', () => {
        expect(Calculator.Add(2,2)).toBe(4);
    })
    it('4 + 4 should return 8', () => {
        expect(Calculator.Add(4,4)).toBe(8);
    })
})

describe('Calculator Subtract Tests', () => {
    it('5 - 3 should return 2', () => {
        expect(Calculator.Substract(5,3)).toBe(2);
    })
    it('28 - 2 should return 26', () => {
        expect(Calculator.Substract(28,2)).toBe(26);
    })
    it('14 - 4 should return 10', () => {
        expect(Calculator.Substract(14,4)).toBe(10);
    })
})

describe('Calculator Multiply Tests', () => {
    it('5 * 3 should return 15', () => {
        expect(Calculator.Multiply(5,3)).toBe(15);
    })
    it('28 * 2 should return 56', () => {
        expect(Calculator.Multiply(28,2)).toBe(56);
    })
    it('14 * 4 should return 56', () => {
        expect(Calculator.Multiply(14,4)).toBe(56);
    })
})


describe('Calculator Division Tests', () => {
    it('6 / 3 should return 2', () => {
        expect(Calculator.Divide(6,3)).toBe(2);
    })
    it('28 / 2 should return 14', () => {
        expect(Calculator.Divide(28,2)).toBe(14);
    })
    it('14 / 7 should return 2', () => {
        expect(Calculator.Divide(14,7)).toBe(2);
    })
})


it('dani should return Dani', () => {
    expect(Capitalize('dani')).toMatch('Dani');
})

const Capitalize = (str) => result = str.charAt(0).toUpperCase() + str.slice(1);
    
