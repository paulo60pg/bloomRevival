import React from "react";
import styled from "styled-components";
import Global from "../../Global";

const MethodeContainer = styled.div`
  margin-top: 8rem;
  margin-bottom: 5rem;
  background: white;
  border-radius: 4px;
  border: 1px solid rgba(230, 230, 230, 1);
  .title--big {
    padding-top: 3.5rem;
    padding-bottom: 2.5rem;
    text-align: center;
    font-family: ${Global.font.title};
    font-weight: ${Global.font.weight.header};
    color: ${Global.color.accent};
  }
  .title--medium {
    padding-top: 2.5rem;
    padding-bottom: 1.5rem;
    font-family: ${Global.font.title};
    font-weight: ${Global.font.weight.header};
    color: ${Global.color.primary};
  }
  .title--small {
    padding-top: 2rem;
    padding-bottom: 1.5rem;
    font-family: ${Global.font.title};
    font-weight: ${Global.font.weight.header};
    color: ${Global.color.secondary};
  }
  .table--header__protect,
  .text--protect {
    color: ${Global.color.protect};
  }
  .table--header__destruct,
  .text--destruct {
    color: ${Global.color.destruct};
  }
  .table--header__medium,
  .text--medium {
    color: ${Global.color.medium};
  }
  .table--header__absence {
    color: ${Global.color.absence};
  }
  .table--text {
    font-weight: ${Global.font.weight.caption};
    color: ${Global.color.dark};
  }
  .bold {
    font-weight: bold;
    color: ${Global.color.tertiary};
    font-size: ${Global.font.size.header};
  }
  .text {
    line-height: 1.8rem;
    font-weight: ${Global.font.weight.caption};
    &:first-letter {
      font-weight: bold;
      color: ${Global.color.tertiary};
      font-size: ${Global.font.size.header};
    }
    .click--link {
      color: ${Global.color.secondAccent};
      text-decoration: none;
      font-weight: bold;
      transition: 0.2s;
      &:hover {
        opacity: 0.7;
      }
    }
  }

  .text--list {
    font-weight: ${Global.font.weight.caption};
    line-height: 1.8rem;
    list-style-type: none;
    li::before {
      content: "-";
      font-size: ${Global.font.size.header};
      font-weight: bold;
      color: ${Global.color.tertiary};
      display: inline-block;
      width: 1rem;
    }
  }
`;
class Methode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MethodeContainer className="container">
        <h1 className="title--big">Notre Méthodologie</h1>

        <h4 className="title--medium">
          1- LE CHOIX DES TEXTES ET DES AMENDEMENTS
        </h4>

        <h5 className="title--small">a- le choix des textes</h5>

        <div className="container">
          <p className="text" align="justify">
            Une sélection de textes en matière de pêche — adoptés par le
            Parlement européen — a été effectuée par l'équipe de BLOOM. Il ne
            s’agit ni d'une liste exhaustive ni d’un échantillon représentatif
            (c'est-à-dire aléatoire) de tous les textes adoptés autour de la
            pêche pendant cette législature, mais plutôt des textes qui nous
            semblent être les plus importants du point de vue de leur impact sur
            les écosystèmes marins et les pêcheurs. En outre, cette sélection
            porte principalement sur les textes adoptés depuis 2017, pour une
            raison d'accessibilité des données (nous n'avons pas trouvé toutes
            les données nécessaires pour couvrir toute la législature).
          </p>
        </div>

        <h5 className="title--small">b- le choix des amendements</h5>

        <div className="container">
          <p className="text" align="justify">
            Un certain nombre d'amendements a ensuite été sélectionné au sein de
            chacun des textes choisis ci-dessus, selon deux critères cumulatifs
            :
          </p>
          <ul className="text--list" align="justify">
            <li>Les amendements dont le détail des votes était disponible </li>
            <li>
              Les amendements pour lesquels les ONG ont émis des recommandations
              de vote.
            </li>
          </ul>
          <p className="text" align="justify">
            Ces deux critères nous ont permis de nous assurer que les
            amendements choisis étaient décisifs, car seuls les amendements
            ayant une certaine importance sont votés par "appel nominal",
            c'est-à-dire qu'un groupe de députés demande la publication du
            détail du vote. Par ailleurs, le deuxième critère nous a également
            permis de nous assurer que les députés ne pouvaient ignorer, par le
            biais des recommandations transmises par les ONG, quel vote allait
            protéger l'océan et quel vote allait le détruire.
          </p>
          <p className="text" align="justify">
            Ici encore, cette sélection d'amendements ne doit pas être regardée
            comme exhaustive ou représentative, mais bien comme une sélection
            restreinte selon 1) les critères décrits ci-dessus et 2) la vision
            et la mission de BLOOM.{" "}
          </p>
          <p className="text" align="justify">
            <span className="bold">NB : </span>cette méthodologie n'a pas pu
            être appliquée in extenso sur trois textes :
          </p>
          <ul className="text--list" align="justify">
            <li>
              Le Règlement Mesures Techniques : des recommandations existaient
              pour tous les amendements demandés en vote par appel nominal.
              Ainsi, nous avons sélectionné les amendements pour lesquels les
              ONG avaient particulièrement insisté en indiquant un double "+"
              (voter absolument pour) ou un double "-" (voter contre absolument)
            </li>
            <li>
              Le Fonds européen pour les Affaires Maritimes et la Pêche : tout
              comme pour le Règlement Mesures Techniques, des recommandations
              existaient pour tous les amendements demandés en vote par appel
              nominal et beaucoup d'entre eux étaient "doublement marqués". Une
              sélection a donc été opérée par l'équipe de BLOOM pour ne prendre
              en compte que ceux qui nous semblaient les plus importants, parmi
              ceux déjà doublement marqués ;
            </li>
            <li>
              L'accord Japon-Union européenne : seuls les amendements 16 et 39
              sur le thon rouge et la chasse à la baleine ont été sélectionnés.
              Très peu d'autres amendements traitaient des problématiques de
              pêche.
            </li>
          </ul>

          <p className="text" align="justify">
            Enfin, seuls quelques "votes finaux", c'est-à-dire ceux portant sur
            le texte entier et dans sa version définitive ont été pris en
            considération. En effet, ces textes finaux contiennent beaucoup de
            dispositions différentes, donc lorsque l'opinion des ONG étaient
            partagée quant à leur contenu, nous n'avons pas inclus ces votes
            dans notre classement.
          </p>
        </div>
        <h4 className="title--medium">2- LE CALCUL DE LA NOTE </h4>
        <h5 className="title--small">a- le barème</h5>
        <div className="container">
          {/* <p className="text bold" align="justify">
            Le barème est le suivant :
          </p> */}
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Les différents types de votes</th>
                <th scope="col">Nombre de points</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table--header__protect">
                <th>Vote protecteur</th>
                <th>3 points</th>
              </tr>
              <tr>
                <td className="table--text" colspan="2" align="justify">
                  En accord avec les recommandations des ONG.
                </td>
              </tr>
              <tr className="table--header__destruct">
                <th>Vote destructeur</th>
                <th>0 point</th>
              </tr>
              <tr>
                <td className="table--text" colspan="2" align="justify">
                  Allant à l’encontre des recommandations des ONG de protection
                  de l'océan (par exemple Greenpeace, Seas at Risk et Oceana).
                </td>
              </tr>
              <tr className="table--header__medium">
                <th>Abstention</th>
                <th>1 point</th>
              </tr>
              <tr>
                <td className="table--text" colspan="2" align="justify">
                  Le député s'est abstenu. Il a donc voté mais ne s'est prononcé
                  ni en faveur, ni en défaveur de l'objet du vote.
                </td>
              </tr>
              <tr className="table--header__absence">
                <th>Absence</th>
                <th>0,5 point</th>
              </tr>
              <tr>
                <td className="table--text" colspan="2" align="justify">
                  Le député n'a voté pour aucun amendement ou texte tout le long
                  de la séance de vote. Nous avons donc considéré qu'une absence
                  était "plus mauvaise" (car la présence est obligatoire) qu'une
                  abstention ("neutre" car n'influence pas l'adoption ou non
                  d'un amendement/texte), mais meilleure qu'un vote destructeur.
                </td>
              </tr>
              <tr className="table--header__absence">
                <th>Présent mais n'a pas voté</th>
                <th>0,5 point</th>
              </tr>
              <tr>
                <td className="table--text" colspan="2" align="justify">
                  Le député n'a pas voté pour l'amendement que nous avons
                  sélectionné. En revanche, il a voté pour d'autres amendements
                  ou textes au sein de la même séance de vote. Il était donc
                  présent mais pour une raison inconnue il n'a pas voté pour cet
                  amendement en particulier. La note est la même que pour une
                  absence.
                </td>
              </tr>
            </tbody>
          </table>
          {/* 
          <img
            src={bareme}
            className="img-fluid"
            alt="tableau du barème de points"
          />

          <p>Légende : </p>
          <p>
            Vote "destructeur" : allant à l’encontre des recommandations des ONG
            de protection de l'océan (par exemple Greenpeace, Seas at Risk et
            Oceana)
          </p>
          <p>Vote "protecteur" : en accord avec les recommandations des ONG</p>
          <p>
            Abstention : Abstention : le député s'est abstenu. Il a donc voté
            mais ne s'est prononcé ni en faveur, ni en défaveur de l'objet du
            vote{" "}
          </p>
          <p>
            Absence : le député n'a voté pour aucun amendement ou texte tout le
            long de la séance de vote. Nous avons donc considéré qu'une absence
            était "plus mauvaise" (car la présence est obligatoire) qu'une
            abstention ("neutre" car n'influence pas l'adoption ou non d'un
            amendement/texte), mais meilleure qu'un vote destructeur
          </p>
          <p>
            Présent mais n'a pas voté : le député n'a pas voté pour l'amendement
            que nous avons sélectionné. En revanche, il a voté pour d'autres
            amendements ou textes au sein de la même séance de vote. Il était
            donc présent mais pour une raison inconnue il n'a pas voté pour cet
            amendement en particulier. La note est la même que pour une absence
          </p> */}

          <p className="text" align="justify">
            <span className="bold">NB 1 : </span>La note la plus basse de ce
            barème est l’attribution de 0 point aux votes "destructeurs" (pour
            voir à quoi peuvent ressembler des recommandations de vote :&nbsp;
            <a
              className="click--link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://seas-at-risk.org/images/pdf/publications/2018-01-15TechnicalMeasuresPlenaryvote-NGOvotingRecommendationFinal.pdf"
            >
              cliquez ici
            </a>
            ). Notre échelle s'étale de 0 à 3 et comprend un écart plus grand
            entre "abstention" et "vote protecteur" (1 -> 3) qu'entre
            "abstention" et "vote destructeur" (1 -> 0) car nous avons voulu
            valoriser les votes protecteurs et leur avons donc alloué un poids
            supérieur.
          </p>

          <p className="text" align="justify">
            <span className="bold">NB 2 : </span>les corrections d'intention de
            vote ont été prises en considération car - même si ces dernières ne
            modifient pas le vote final - les corrections sont rares et relèvent
            donc vraisemblablement plus de l'erreur que d'une véritable
            stratégie. En outre, au regard de la méthode de vote - très rapide -
            il est compréhensible que des erreurs surviennent.
          </p>
        </div>
        <h5 className="title--small">
          b- la méthode de calcul : une moyenne pondérée
        </h5>
        <div className="container">
          <p className="text" align="justify">
            À partir des notations portant sur chaque vote, nous avons calculé
            une moyenne pondérée, c'est-à-dire que chaque règlement a reçu le
            même poids dans la note finale, quel que soit le nombre
            d'amendements considérés.
          </p>

          <p className="text" align="justify">
            Pour cela, les points de chaque député ont été additionnés pour
            chaque règlement, puis le total a été divisé par le maximum de
            points possible par règlement. Par exemple, pour le Règlement
            Mesures Techniques, six votes ont été pris en compte, le total par
            député pour le Règlement Mesures Techniques a donc été divisé par 18
            (6 votes x 3 points pour chaque vote "protecteur"). Dans le cas de
            Michèle Alliot-Marie, qui a eu deux votes protecteurs et quatre
            votes destructeurs au sein de ce règlement, sa note est donc de (2x3
            + 4x0)/18 = 0,3.
          </p>

          <p className="text" align="justify">
            Les notes de chaque règlement ont ensuite été additionnées pour
            chaque député et calibrées sur 20 points, comme à l'école.{" "}
          </p>

          <p className="text" align="justify">
            <span className="bold">NB 2 : </span>Cette règle a été appliquée à
            tous les députés, à l’exception de ceux qui ont été inactifs pendant
            une période, qu'il s'agisse de ceux partis avant la fin de la
            législature ou de ceux qui les ont remplacés. Le nombre par lequel
            leur note totale est divisée varie donc en fonction du nombre de
            texte pour lesquels chaque député a pu voter. Par exemple, Louis
            Aliot a quitté sa fonction de député en juillet 2017 et, pour les
            textes que nous avons pris en compte, n'a été actif que pour deux
            d’entre eux. Ainsi sa note totale a été divisée par 10 (=20/2) et
            les textes pour lesquels il n'a pas pu voter n'ont pas été
            comptabilisés dans sa moyenne. Il entre alors dans la catégorie des
            "inactifs", qui regroupe les députés ayant quitté leurs fonctions et
            n'ayant donc pas une moyenne représentative car trop peu de votes
            ont pu être pris en compte.
          </p>
        </div>
        <h5 className="title--small">c- le code couleur</h5>
        <div className="container">
          <p className="text" align="justify">
            Un code couleur a finalement été attribué à chaque député :{" "}
          </p>
          <ul className="text--list">
            <li align="justify">
              <span className="text--protect">VERT </span> pour les députés
              ayant une note allant de 14/20 à 20/20 : + de 70% de leurs votes
              sont PROTECTEURS de l'océan.
            </li>
            <li align="justify">
              <span className="text--medium">ORANGE </span> pour les députés
              ayant une note allant de 10/20 à 14/20 : entre 50% et 70% de leurs
              votes sont PROTECTEURS de l'océan
            </li>
            <li align="justify">
              <span className="text--destruct">ROUGE </span> pour les députés
              ayant une note allant de 0/20 à 10/20 : - de 50% de leurs votes
              sont PROTECTEURS de l'océan
            </li>
          </ul>
        </div>

        <h4 className="title--medium">3- LES SOURCES</h4>
        <div className="container">
          <p className="text" align="justify">
            Tous les textes, amendements et votes, ont été collectés sur le site
            du{" "}
            <a
              className="click--link"
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.europarl.europa.eu/portal/fr"
            >
              Parlement européen
            </a>
            . Les recommandations de vote sont celles des différentes coalitions
            d'ONG de protection de l'océan (par exemple Greenpeace, Seas at Risk
            et Oceana) travaillant sur les textes sélectionnés.
          </p>

          <p className="text" align="justify">
            Pour toute demande supplémentaire, envoyer un mail à l'adresse
            suivante : contact@bloomassociation.org
          </p>
        </div>
      </MethodeContainer>
    );
  }
}

export default Methode;
