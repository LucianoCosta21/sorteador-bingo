import { useState } from 'react';
import styles from './Bingo.module.css';

interface CartelaProps {
  numerosCartela: number[][];
}

const Bingo = ({ numerosCartela }: CartelaProps) => {
  const [numerosSorteados, setNumerosSorteados] = useState<number[]>([]);

  function handleSortear() {
    try {
      setNumerosSorteados((prev): number[] => {
        if (numerosSorteados.length <= 75) {
          let x: number;
          do {
            x = Math.floor(Math.random() * 75 + 1);
          } while (prev.includes(x));
          return [...prev, x];
        } else {
          alert('Limite de número sorteado!');
          return prev;
        }
      });
    } catch (error) {
      alert('Ocorreu um erro ao sortear o número. Tente novamente.');
    }
  }

  function handleReniciar() {
    setNumerosSorteados(() => []);
  }

  return (
    <>
      <section className={styles.container}>
        <h1>Sorteador de Bingo</h1>
        <div>
          <h2 className={styles.info_numeros_sorteados}>Números Sorteado</h2>
          <div className={styles.numeros}>
            {numerosSorteados
              .sort((a: number, b: number): number => {
                return a - b;
              })
              .map((i) => (
                <p className={styles.infoTexto}>{i}</p>
              ))}
          </div>
          <h2 className={styles.info_numeros_restante}>Números Restante</h2>
          <div className={styles.numeros}>
            {<p className={styles.infoTexto}>{75 - numerosSorteados.length}</p>}
          </div>
        </div>

        <div className={styles.infoBingo}>
          <ul className={styles.listaBingo}>
            <li className={styles.infoNome}>
              <span>B</span>
            </li>
            <li className={styles.infoNome}>
              <span>I</span>
            </li>
            <li className={styles.infoNome}>
              <span>N</span>
            </li>
            <li className={styles.infoNome}>
              <span>G</span>
            </li>
            <li className={styles.infoNome}>
              <span>O</span>
            </li>
          </ul>
        </div>
        <section className={styles.teste}>
          <div className={styles.containerNumeros}>
            {numerosCartela.map((linha) => (
              <ul className={styles.listaBingo}>
                {linha.map((item, index) => (
                  <li
                    key={index}
                    className={`${styles.listaNome} ${
                      numerosSorteados.includes(item) ? styles.active : ' '
                    }`}
                  >
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className={styles.containerBtn}>
            <button onClick={handleSortear} className={styles.btn}>
              Sortear
            </button>
            <button onClick={handleReniciar} className={styles.btn}>
              Reniciar
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Bingo;
