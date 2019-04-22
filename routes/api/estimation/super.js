const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  superEstimationBien,
} = require("../../../estimation_methodes/superusermtd");

// Super Validation
const validateSuperBienInput = require("../../../validation/SuperBien");

// Super Model
const SuperBien = require("../../../models/SuperBien");

/**
 * @route   POST /routes/api/estimation/super/bien/save
 * @desc    Estimate super bien and saves it in user account for later use
 * @access  Auth Users
 *
 */
router.post(
  "/bien/save",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateSuperBienInput(req.body);
    // Check validation
    if (!isValid) {
      console.log(errors);
      return res.status(400).json(errors);
    }

    const newSuperBien = new SuperBien({
        user: req.user.id,
          nom: req.body.client.nom,
          prenom: req.body.client.prenom,
          adressePostale: req.body.client.ville,
          email: req.body.client.email,
          numero: req.body.bienImmobillier.localisationBien.umero,
          voie: req.body.bienImmobillier.localisationBien.voie,
          codePostal: req.body.bienImmobillier.localisationBien.codePostal,
          ville: req.body.bienImmobillier.localisationBien.ville,

          anneConstruction: req.body.bienImmobillier.informations.anneConstruction,
          typeBienAffiche: req.body.bienImmobillier.informations.typeBienAffiche,
          nombrePieces: req.body.bienImmobillier.informations.nombrePieces,
          nombreChambres: req.body.bienImmobillier.informations.nombreChambres,
          surfaceHabitable: req.body.bienImmobillier.informations.surfaceHabitable,
          surfaceTerrain: req.body.bienImmobillier.informations.surfaceTerrain,
          nombreNiveaux: req.body.bienImmobillier.informations.nombreNiveaux,
          ascenseur: req.body.bienImmobillier.informations.ascenseur,
          balconOuTerrasse: req.body.bienImmobillier.informations.balconOuTerrasse,
          LibreALaVente: req.body.bienImmobillier.informations.LibreALaVente,
          titreDossier: req.body.bienImmobillier.informations.titreDossier,
          descriptifBien: req.body.bienImmobillier.informations.descriptifBien,
          DPE: req.body.bienImmobillier.informations.DPE,
          GES: req.body.bienImmobillier.informations.GES,
          PrixMandat: req.body.bienImmobillier.informations.PrixMandat,

          chargesAnnuellesTotales: req.body.bienImmobillier.chargesEtImpots.chargesAnnuellesTotales,
          chargesDeCopropriete: req.body.bienImmobillier.chargesEtImpots.chargesDeCopropriete,
          impotsFonciers: req.body.bienImmobillier.chargesEtImpots.impotsFonciers,
          annexes: req.body.bienImmobillier.annexes,
          pointsForts: req.body.bienImmobillier.pointsFortsPointsFaible.pointsForts,
          pointsFaibles: req.body.bienImmobillier.pointsFortsPointsFaible.pointsFaibles,
          commentairesConfidentiels: req.body.bienImmobillier.commentairesConfidentiels,

          etatQualiteGrosOeuvre: req.body.caracteristiques.elementsPrincipaux.etatQualiteGrosOeuvre,
          epoqueConstruction: req.body.caracteristiques.elementsPrincipaux.epoqueConstruction,
          mitoyennete: req.body.caracteristiques.elementsPrincipaux.mitoyennete,
          agrementGeneral: req.body.caracteristiques.elementsPrincipaux.agrementGeneral,
          standing: req.body.caracteristiques.elementsPrincipaux.standing,
          accessibilite: req.body.caracteristiques.elementsPrincipaux.accessibilite,
          toutAEgout: req.body.caracteristiques.elementsPrincipaux.toutAEgout,

          qualiteArchitecturale: req.body.caracteristiques.autresElements.qualiteArchitecturale,
          etatPortesEtFenetres: req.body.caracteristiques.autresElements.etatPortesEtFenetres,
          etatDesToitures: req.body.caracteristiques.autresElements.etatDesToitures,
          clotureTerrain: req.body.caracteristiques.autresElements.clotureTerrain,

          nuissanceSonore: req.body.caracteristiques.environement.nuissanceSonore,
          voisinageVisaVis: req.body.caracteristiques.environement.voisinageVisaVis,
          qualiteEnvironnement: req.body.caracteristiques.environement.qualiteEnvironnement,
          proximiteServicesPublics: req.body.caracteristiques.environement.proximiteServicesPublics,

          qualiteDistribution: req.body.caracteristiques.criteresGeneraux.qualiteDistribution,
          etatMursPlafonds: req.body.caracteristiques.criteresGeneraux.etatMursPlafonds,
          solsEtRevetementSols: req.body.caracteristiques.criteresGeneraux.solsEtRevetementSols,

          tailleSejour: req.body.caracteristiques.sejour.tailleSejour,
          expositionSejour: req.body.caracteristiques.sejour.expositionSejour,
          vueSejour: req.body.caracteristiques.sejour.vueSejour,
          luminosite: req.body.caracteristiques.sejour.luminosite,
          cheminee: req.body.caracteristiques.sejour.cheminee,

          taille: req.body.caracteristiques.cuisine.taille,
          equipement: req.body.caracteristiques.cuisine.equipement,
          etatGeneral: req.body.caracteristiques.cuisine.etatGeneral,
          agrement: req.body.caracteristiques.cuisine.agrement,

          tailleDesPieces: req.body.caracteristiques.chambres.tailleDesPieces,
          etatDesPieces: req.body.caracteristiques.chambres.etatDesPieces,
          expositionAuxBruits: req.body.caracteristiques.chambres.expositionAuxBruits,

          taillePiecesSanitaires: req.body.caracteristiques.sanitaires.taillePiecesSanitaires,
          nombreDeSanitaires: req.body.caracteristiques.sanitaires.nombreDeSanitaires,
          qualiteEtatSanitaires: req.body.caracteristiques.sanitaires.qualiteEtatSanitaires,

          factureEnergetique: req.body.caracteristiques.energie.factureEnergetique,
          installationElectrique: req.body.caracteristiques.energie.installationElectrique,
          installationGaz: req.body.caracteristiques.energie.installationGaz,
          balconLogiaTerasse: req.body.caracteristiques.annexes.balconOuTerrasse,
          caveSousSol: req.body.caracteristiques.annexes.caveSousSol,
          agrementJardin: req.body.caracteristiques.annexes.agrementJardin,
          garageOuParkingOuvert: req.body.caracteristiques.annexes.garageOuParkingOuvert,
          comble: req.body.caracteristiques.annexes.comble,
          prix_comparaison: req.body.estimation.prix_estimation,
          prix_reference: req.body.estimation.prix_reference
    });
    const EstimatedSuperBien = superEstimationBien(newSuperBien);
    EstimatedSuperBien.save()
      .then(superBien => res.json(superBien))
      .catch(err => console.log(err));
  }
);

/**
 * @route   GET /api/estimation/super/biens/saved
 * @desc    FETCH saved super biens estimations of the user
 * @access  Auth Users
 */

router.get(
  '/biens/saved',
passport.authenticate("jwt", {session: false}),
(req,res) => {
 var user = {
   id : req.user.id
 }
 SuperBien.find({"user" : user.id})
 .then(data => {
    if(data){
       res.json(data);
    } else{
      return res.status(400).json({error : "pas de biens sauvegardes trouvées"});
    }
 })
 .catch(err => console.log(err));

}
);

/**
 * @route   DELETE /api/estimation/super/biens/saved/:id
 * @desc    Delete the estimation made by the user
 * @access  Auth Users
 */

router.delete(
  '/biens/saved/:id',
  passport.authenticate('jwt',{session:false}),
  (req,res) => {
    SuperBien.find({user : req.user.id}).then( biens => {
      SuperBien.findById(req.params.id)
      .then(bien => {
        // check estimation ownership
        if(bien.user.toString() != req.user.id){
          return res.status(401).json({notauthorized : "utilisateur pas autorisé"});
        }
        //delete
        bien.remove().then( () => res.json({success : true}));
      })
      .catch(err => res.status(404).json({error : "pas d'estimation de bien trouvé"}));
    })
  }
);

module.exports = router;
