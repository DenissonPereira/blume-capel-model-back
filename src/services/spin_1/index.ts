import { databaseConnection } from "../../database";
import { ISpin } from "../../model";

export async function serviceSpin_1() {
    try {
        const spin1Geral = await databaseConnection.raw<ISpin[]>(
            `
        SELECT
        spin_12_1.id AS id,
        spin_12_1.temperatura AS temperatura,
        spin_12_1.m_a AS m_a,
        spin_12_1.m_b AS m_b,
        spin_12_1.mag_staggered AS mag_staggered,
        spin_12_1.mag_total AS mag_total
      FROM
        spin_12_1;
          `
        );
        //@ts-ignore
        const spin_1: ISpin[] = spin1Geral[0];
        if (spin_1 && spin_1.length > 0) return { status: true, spin_1: spin_1 };
        return { status: false };
    } catch (erro) {
        console.log(erro);
    }
}