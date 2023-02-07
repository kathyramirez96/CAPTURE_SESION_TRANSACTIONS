import * as moment from 'moment-timezone';
import * as mom from 'moment';

export const HOY = mom().format('YYYY,MM,DD');
export const FECHA_ACTUAL = moment().tz("America/bogota").format('YYYY-MM-DD');
export const FECHA_NORMAL = moment().tz("America/bogota").format('YYYY-MM-DD-hh-mm-ss');
export const FECHA_CONSULTA = moment().tz("America/bogota").format('YYYY-MM-DD');
export const FECHA_MES_ATRAS = moment().tz("America/bogota").format('YYYY') +"-"+ (+moment().tz("America/bogota").format('MM')-1) + '-01' 


export function DIADIFERENCIA(diaUno:string,diaDos:string){
    try{
        const dateOne = moment(diaUno.split(','));
        const dateTwo = moment(diaDos.split(','));
        return   dateOne.diff(dateTwo, 'days');
    }catch(err){
        return 0;
    }

}
