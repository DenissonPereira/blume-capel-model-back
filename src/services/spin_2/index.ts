import { databaseConnection } from "../../database";
import { ISpin } from "../../model";

export async function serviceSpin_2() {
    try {
        const spin1Geral = await databaseConnection.raw<ISpin[]>(
            `
        SELECT
        spin_12_2.id AS id,
        spin_12_2.temperatura AS temperatura,
        spin_12_2.m_a AS m_a,
        spin_12_2.m_b AS m_b,
        spin_12_2.mag_staggered AS mag_staggered,
        spin_12_2.mag_total AS mag_total
      FROM
        spin_12_2;
          `
        );
        //@ts-ignore
        const spin_2: ISpin[] = spin1Geral[0];
        if (spin_2 && spin_2.length > 0) return { status: true, spin_2: spin_2 };
        return { status: false };
    } catch (erro) {
        console.log(erro);
    }
}