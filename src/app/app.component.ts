import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Activite-Blog-OCR';

  posts = [
    {
      title: 'Ivre, il décède d’une crise cardiaque en essayant de regarder toutes les vidéos de YouTube.\n',
      date: new Date(9, 9, 9 , 9 , 9, 9, 9),
      contenu:
        'C’est dans la paisible bourgade de Saint-Pierre en Faucigny que ce drame s’est déroulé.\n' +
        'Mathieu, 23 ans, est un jeune homme, vivant toujours chez ses parents, curieux de savoir ce qu’il se passe partout dans le monde, se décide, lors d’une nuit d’insomnie \n' +
        'et de forte ivresse, de regarder toutes les vidéos de YouTube disponibles depuis 2005! Il doit donc regarder des milliards de vidéos, des chats, des bébés, des chiots, \n' +
        'du gaming des handspinner sans oublier les complots!' +
        '\n' +
        '4 jours plus tard de vidéos non stop, il n’a hélas pas pu aller au delà de l’année 2006, en effet c’est devant la vidéo suivante de datant de 2006, que les parents de \n' +
        'Mathieu découvrirent alors leur fils la tête écrasé sur son clavier, ayant écrit dans la barre de recherche: \n' +
        '« juhny,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, etc… »\n' +
        '« Sa soif de connaissances était sans limites! » cita Josine, sa mère, qui ajouta également: « Nous ne pouvions plus le supporter, jamais de copine, jamais de travail.\n' +
        'Nous voulions qu’il parte… Mais nous nous attendions pas à c’qu’il nous laisse toute ses merdes chez nous! »\n' +
        'Visiblement choqués, les parents de Mathieu, vont devoir vivre sans leur fils, qui leur laisse une chambre ensevelie de mouchoirs usagés, puant le sperme séché.\n' +
        'C’est une bien triste fin pour un homme si épanoui.',
      url: 'https://nordpresse.be/ivre-decede-dune-crise-cardiaque-essayant-de-regarder-toutes-videos-de-youtube/',
      loveIts: 0
    },
    {
      title: 'Pacte d’excellence : la « défense contre les forces du mal » remplacera le cours de religion',
      date: new Date(6, 6, 6 , 6 , 6, 6, 6),
      contenu:
        '« Draco Dormiens Nunquam Titillandus » : On ne chatouille jamais un dragon qui dort. Ce sont ces mots qui ornent l’entrée de la salle commune de la Maison Gryffondor. \n' +
        'Nous sommes à Poudlard, une sympathique école située à quelques kilomètres de Londres au beau milieu de la campagne. À première vue ce collège semble être resté dans la\n' +
        'pure tradition de l’enseignement : point de tablette ; on écrit à la plume. Pas de hand spinner non plus, ici, quand on veut s’amuser, on joue au Quidditch.\n' +
        'La réputation de l’école est mondiale, chose rare pour une école secondaire. Depuis plusieurs années, les professeurs se succèdent pour un cours très convoité : \n' +
        '« Défense contre les Forces du Mal.» \n\n' +
        'Le dernier promu à cette fonction, Severus Rogue, ne cache pas sa joie et sa fierté : « Oh oui, ça me fait plaisir. Quand j’ai appris la nouvelle, j’étais \n' +
        'tellement content que j’ai enlevé 17000 points à Gryffondor, ouais, juste comme ça ! Blague à part, ce cours est très important. Cette année, nous allons apprendre à\n' +
        'faire des horcruxes, à voter pour ‘En Marche’ et à travailler pour des ASBL qui viennent en aide aux SDF tout en ayant un salaire mirobolant ! Ce n’est pas pour rien que\n' +
        'nous sommes en tête au classement PISA ! Notre vie a changé depuis l’instauration de ce cours » Il est vrai que tous semblent heureux : professeurs comme étudiants.\n' +
        'C’est ce qui a fait que, cette semaine, Marie-Martine Schyns, entre deux apéros, a décidé de proposer ce cours pour remplacer la religion. Dans les faits, tous les cours\n' +
        'de religion, morale et autres passeraient à la trappe au profit des défenses contre les Forces du Mal.\n\n' +
        '«Oui, cette idée me parait pleine de bon sens » explique-t-elle, « Il me paraissait important de supprimer tous ces cours inutiles que sont la religion, la morale, la\n' +
        'citoyenneté ou le rien pour le remplacer par quelque chose, qui d’après cette étude de J-K Rowling, semble fonctionner à l’étranger ! Hè, que je sache, Voldemort n’a pas\n' +
        'encore fait surface ! Oups, j’ai prononcé son nom ! Hahaha ! Je vous laisse, j’ai un drink avec le ministre de la magie !» L’opposition est dubitative : au MR on pointe\n' +
        'du doigt le manque d’idées. Alain Destexhe ne mâche pas ses mots: « Ça a été fait ailleurs et ça n’a pas fonctionné. Ce n’est qu’un prétexte de plus pour donner des\n' +
        'gages aux intégristes musulmans : comme par hazard, on a choisi comme exemple une école où ou le directeur est barbu et se promène en djellaba ». \n' +
        'Chez Ecolo, on est plus enthousiaste, Georges Gilkinet se réjouit « qu’on puisse apprendre aux jeunes à fabriquer du véritaserum pour en faire boire à Didier Reynders!»\n' +
        'Une nouvelle mesure qui atteint son but : faire parler de la ministre, qui au passage, n’a toujours pas récupéré son permis de transplaner depuis qu’elle a vomi sa\n' +
        'bièraubeurre sur deux détraqueurs',
      url: 'https://nordpresse.be/pacte-dexcellence-defense-contre-forces-mal-remplacera-cours-de-religion/',
      loveIts: 0
    },
    {
      title: 'Ivres, ils partent à la chasse au mi-grand après avoir entendu un discours haineux. Les victimes vont vous étonner!!!',
      date: new Date(3, 3, 3 , 3, 3, 3, 3),
      contenu:
        'C’est un triste jour pour la télévision, en effet, après avoir entendu un énième discours haineux, ils décident de « netoillez la franss é la belle-gik’  » de tous \n' +
        'les mi-grands, aussi appelés personne de petite taille ou nains. C’est ainsi qu’ils se sont introduits dans le tournage de plusieurs émissions de télé afin de commencer \n' +
        'par s’attaquer aux plus célèbres.\n' +
        'Ainsi, ils ont réussi à abattre la très célèbre Mimie Matty, l’Ange Gardien  ainsi que Passepartout et Passe-temps, les accompagnateurs des personnes participant à Fort \n' +
        'Boyard. Les deux hommes, identifiés comme Darryl Weathers et son fils, Jimmy Weathers, sont extrêmement dangereux et la police recommande ne ne pas tenter de les \n' +
        'appréhender et de les contacter directement.',
      url: 'https://nordpresse.be/ivres-partent-a-chasse-mi-grand-apres-entendu-discours-haineux-victimes-etonner-photos/',
      loveIts: 0
    },
  ];

}
