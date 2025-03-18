import { useState } from 'react';
import styles from './Cartela.module.css';

interface CartelaProps {
  numerosCartela: number[][];
}

const Cartela = ({ numerosCartela }: CartelaProps) => {
  const [cartela, setCartela] = useState<number[][]>([]);
  const [visivel, setVisivel] = useState<boolean>(false);

  function handleGerarCartela() {
    try {
      let novaCartela: number[][] = [];
      for (let i = 1; i <= 5; i++) {
        let coluna = [...numerosCartela[i]]
          .sort(() => Math.random() - 0.5)
          .slice(0, 5);
        novaCartela.push(coluna);
        setCartela(novaCartela);
      }
      if (visivel == false) {
        setVisivel(() => true);
      }
    } catch (error) {
      console.error('Erro ao gerar cartela:', error);
    }
  }

  function imprimirTabela() {
    window.print();
  }

  return (
    <section className={styles.container}>
      <div>
        <div className={styles.containerBtn}>
          <button onClick={handleGerarCartela} className={styles.btn}>
            Gerar Cartela
          </button>
          <button
            onClick={visivel ? imprimirTabela : () => null}
            className={styles.btn}
          >
            Imprimir Tabela
          </button>
        </div>

        {visivel ? (
          <table>
            <thead className={styles.thead}>
              <tbody>
                <td className={styles.infoTabela}>B</td>
                <td className={styles.infoTabela}>I</td>
                <td className={styles.infoTabela}>N</td>
                <td className={styles.infoTabela}>G</td>
                <td className={styles.infoTabela}>O</td>
              </tbody>
              <tbody>
                {cartela.sort().map((item, cartelaIndex) => (
                  <tr key={cartelaIndex} className={styles.tr}>
                    {item.map((numeros, numerosIndex) => (
                      <td key={numerosIndex} className={styles.td}>
                        {cartelaIndex === 2 && numerosIndex === 2
                          ? 'FREE'
                          : numeros}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </thead>
          </table>
        ) : null}
      </div>
    </section>
  );
};

export default Cartela;
