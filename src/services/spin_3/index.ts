import { databaseConnection } from "../../database";
import { ISpin } from "../../model";

export async function serviceSpin_3() {
    try {
        const spin1Geral = await databaseConnection.raw<ISpin[]>(
            `
        SELECT
        spin_12_3.id AS id,
        spin_12_3.temperatura AS temperatura,
        spin_12_3.m_a AS m_a,
        spin_12_3.m_b AS m_b,
        spin_12_3.mag_staggered AS mag_staggered,
        spin_12_3.mag_total AS mag_total
      FROM
        spin_12_3;
          `
        );
        //@ts-ignore
        const spin_3: ISpin[] = spin1Geral[0];
        if (spin_3 && spin_3.length > 0) return { status: true, spin_3: spin_3 };
        return { status: false };
    } catch (erro) {
        console.log(erro);
    }
}