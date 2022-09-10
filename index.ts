export interface Partner
{
    age: number
}

export function check( partner: Partner | number = { age: 22 } )
{
    if( typeof(partner) !== 'number' ) return partner.age < 25
    return partner < 25
}

export default { check }