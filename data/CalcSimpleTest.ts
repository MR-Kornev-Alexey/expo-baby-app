import { growthWeightData } from './data';

export default class CalcSimpleTest {
    private readonly GENDER: string;
    private readonly OLD: number;
    private readonly WEIGHT_NOW: number;
    private readonly GROWTH_NOW: number;

    private cachedGrowthArray: number[] | null = null;
    private cachedWeightArray: number[] | null = null;

    constructor(
        gender: string,
        oldMonth: number,
        growthNow: number,
        weightNow: number,
    ) {
        this.GENDER = gender;
        this.OLD = oldMonth;
        this.GROWTH_NOW = growthNow;
        this.WEIGHT_NOW = weightNow;
    }

       private static callIndex(old: number) : number{
        if (old <= 12) {
            return old;
        }
        if (old > 12 && old <= 15) {
            return 13;
        }
        if (old > 15 && old <= 18) {
            return 14;
        }
        if (old > 18 && old <= 21) {
            return 15;
        }
        if (old > 21 && old <= 24) {
            return 16;
        }
        if (old > 24 && old <= 27) {
            return 17;
        }
        if (old > 27 && old <= 30) {
            return 18;
        }
        if (old > 30 && old <= 33) {
            return 19;
        }
        if (old > 33 && old <= 36) {
            return 20;
        }
    }

    private findArraySimple(data: 'growth' | 'weight', index: number): number[] {
        if (this.GENDER === 'boy') {
            return data === 'growth' ? growthWeightData.boy.growth[index] : growthWeightData.boy.weight[index];
        }
        return data === 'growth' ? growthWeightData.girl.growth[index] : growthWeightData.girl.weight[index];
    }

    findNumber(a, g) {
        const { abs } = Math;
        const closest = (a, g) =>
            a.reduce((p, c) => (abs(c - g) < abs(p - g) ? c : p));
        return [a.indexOf(closest(a, g)), closest(a, g)];
    }

    // Используем кеширование для массивов роста и веса
    private getGrowthAndWeightArrays(): { growth: number[], weight: number[] } {
        const index = CalcSimpleTest.callIndex(this.OLD);
        // console.log(index)
        if (!this.cachedGrowthArray || !this.cachedWeightArray) {
            const growthArray = this.findArraySimple('growth', index);
            const weightArray = this.findArraySimple('weight', index);
            this.cachedGrowthArray = growthArray;
            this.cachedWeightArray = weightArray;
        }
        return { growth: this.cachedGrowthArray, weight: this.cachedWeightArray };
    }

    // Основной метод, возвращающий данные
    findIndexExpress() {
        // console.log('this.WEIGHT_NOW ---', this.WEIGHT_NOW)
        // console.log('this.GROWTH_NOW ---', this.GROWTH_NOW)
             const { growth, weight } = this.getGrowthAndWeightArrays();
        const findGrowth = this.findNumber(growth, this.GROWTH_NOW);
        const findWeight = this.findNumber(weight, this.WEIGHT_NOW);
        return { growth, weight, findGrowth, findWeight };
    }
}

// Пример использования:

