import { useEffect, useState } from "react";
import Menu from "../components/Menu";

function Home() {
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const timeout = setTimeout (() => {
        //carega dados
        setCarregando(false)
    }, 5000);
  }, []);
  return (
    <>
      <header>
        <h1>Página Inicial</h1>
      </header>
      <main>
        <Menu />
        <section>
          <h2>Página Inicial</h2>
          {carregando ? (
            <h3>Aguarde...</h3>
          ) : (
            <div className="card-grid">
              <article>
                <h3>Mural de Aviso</h3>
                <ul>
                  <li></li>
                </ul>
              </article>
              <article>
                <h3>Agenda academica</h3>
                <ul>
                  <li></li>
                </ul>
              </article>
              <article>
                <h3>Histórico de Notas</h3>
                <ul>
                  <li></li>
                </ul>
              </article>
              <article>
                <h3>Histórico de Faltas</h3>
                <ul>
                  <li></li>
                </ul>
              </article>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default Home;
