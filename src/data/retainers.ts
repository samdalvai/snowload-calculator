import {Product, Retainer, RetainerResistanceWithCode, RetainerWithMissingInfo} from "../functions/types";
import {products} from "./products";
import {retainerResistance} from "./resistance";

export const getRetainers = (): Retainer[] => {
    const productInfos: Product[] = products
    const resistances: RetainerResistanceWithCode[] = retainerResistance

    return retainers.map(r => (
        {
            code: r.code,
            resistance: resistances.filter(res => res.retainerCode === r.code).map(res => ({
                    dist400: res.dist400,
                    dist500: res.dist500,
                    dist600: res.dist600,
                    dist700: res.dist700,
                    dist800: res.dist800,
                    dist900: res.dist900,
                    dist1000: res.dist1000
                }
            ))[0],
            profile: r.profile,
            productInfo: productInfos.filter(info => info.productCode === r.code)[0],
            type: "Retainer"
        }))
}


export const retainers: RetainerWithMissingInfo[] = [
    {
        code: '040258',
        profile: '3000'
    },
    {
        code: '040259',
        profile: '3000'
    },
    {
        code: '020046',
        profile: '2500'
    },
    {
        code: '020017',
        profile: '3000'
    },
    {
        code: '020042',
        profile: '3000'
    },
    {
        code: '020036',
        profile: '2500'
    },
    {
        code: '020001',
        profile: '13/13/2'
    },
    {
        code: '020019',
        profile: '13/13/2'
    },
    {
        code: '020027',
        profile: '15/15/2'
    },
    {
        code: '020003',
        profile: '17/17/2'
    },
    {
        code: '020020',
        profile: '17/17/2'
    },
    {
        code: '020005',
        profile: '20/20/2'
    },
    {
        code: '020006',
        profile: '20/20/3'
    },
    {
        code: '020022',
        profile: '20/20/3'
    },
    {
        code: '020028',
        profile: '20/20/3'
    },
    {
        code: '020007',
        profile: '20/20/3'
    },
    {
        code: '020023',
        profile: '20/20/3'
    },
    {
        code: '020045',
        profile: '1500'
    },
    {
        code: '020039',
        profile: '3000'
    },
    {
        code: '020040',
        profile: '3000'
    }
]