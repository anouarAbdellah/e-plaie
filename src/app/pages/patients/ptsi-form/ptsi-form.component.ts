import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Utils } from 'src/app/shared/helpers/utils';
import { PatientsService } from 'src/app/shared/services/patients.service';
import {constants, wounds_zones, wound_colorations, wound_coloration_codes, wound_phases, wound_steps, wound_stades, wound_tissus, wound_humidity} from "../../../shared/constants";

@Component({
  selector: 'app-ptsi-form',
  templateUrl: './ptsi-form.component.html',
  styleUrls: ['./ptsi-form.component.scss']
})
export class PtsiFormComponent implements OnInit {
  title = constants.PTSI;
  data: any = {
    wound_id: null,
    patho: null,
    patho_dopler: null,
    patho_date: null,
    patho_operee: null,
    tvp: null,
    tvp_date: null,
    contention: null,
    aomi: null,
    aomi_doppler: null,
    aomi_date: null,
    cardiopathie: null,
    anticoagulant: null,
    tabac: null,
    cholesterolemie: null,
    hta: null,
    did: null,
    dnid: null,
    dnid_hbac: null,
    dnid_date: null,
    obesite: null,
    denutrition: null,
    mobelite: null,
    allergie: null,
    hygiene: null,
    ordonnance: null,
    vat: null,
    bilan_sanguin: null,
    bilan_sanguin_date: null,
    bilan_sanguin_dfg: null,
    bilan_sanguin_gb: null,
    bilan_sanguin_albumine: null,
    bilan_sanguin_crp: null,
    douleur: null,
    douleur_eva: null,
    douleur_spontanee: null,
    douleur_provoquee: null,
    douleur_intermittente: null,
    douleur_continue: null,
    antalgique: null,
    antalgique_niveau: null,
    plaie_siege: null,
    plaie_anciennete: null,
    plaie_date_episode: null,
    spontanee: null,
    traumatisme: null,
    post_operatoire: null,
    ulcere: null,
    veineux: null,
    arteriel: null,
    mixte: null,
    mal_perf: null,
    escarre_stade: null,
    hematome: null,
    brulure_degre: null,
    dermabrasion: null,
    plaie_autre: null,
    soins_ide: null,
    soins_frequence: null,
    soins_frequence_jours: null,
    pansement_primaire: null,
    pansement_primaire_deplace: null,
    pansement_primaire_tenue: null,
    pansement_primaire_tolerance: null,
    pansement_secondaire: null,
    pansement_secondaire_deplace: null,
    pansement_secondaire_tenue: null,
    pansement_secondaire_tolerance: null,
    protocole_detersion: null,
    protocole_anesth: null,
    protocole_compresse: null,
    protocole_bistouri: null,
    protocole_curette: null,
    protocole_douleur: null,
    protocole_douleur_eva: null,
    protocole_prelevement: null,
    protocole_ecouvillon: null,
    protocole_curtage: null,
    protocole_biopsie: null,
    protocole_pansement_primaire: null,
    protocole_pansement_secondaire: null,
    protocole_peau_peri: null,
    protocole_contention: null,
    protocole_contention_taille: null,
    protocole_contention_type: null,
    protocole_antibiotherapie: null,
    protocole_antibiotherapie_dose: null,
    protocole_antibiotherapie_duree: null,
    protocole_bilan: null,
    protocole_radiographie: null,
    protocole_doppler_veineux: null,
    protocole_doppler_arteriel: null,
    protocole_consultation: null,
    protocole_photo: null,
    protocole_planimetrie: null,
    observations: null,
    zone: null,
    phase: null,
    step: null,
    stade: null,
    tissus: null,
    inflammation: null,
    humidity: null,
    berge_width: null,
    berge_height: null,
    wound_width: null,
    wound_height: null,
    wound_depth: null,
    colorations: [],
    images: [],
    existing_colorations: [],
    existing_images: [],
    remove_colorations: [],
    remove_images: [],
  };
  isLoading = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  wounds_zones = wounds_zones;
  wound_colorations = wound_colorations;
  wound_coloration_codes = wound_coloration_codes;
  wound_phases = wound_phases;
  wound_steps = [];
  wound_stades = wound_stades;
  wound_tissus = wound_tissus;
  wound_humidity = wound_humidity;
  @Input() selectedElement;
  @Input() wound;
  @ViewChild('f') form: NgForm;
  @Output() closingEvent = new EventEmitter();
  @Output() reloadEvent = new EventEmitter();
  steps = [
    {
      key: "step_1",
      name: "Constituer un PTSI"
    },
    {
      key: "step_2",
      name: "Constituer un PTSI"
    },
    {
      key: "step_3",
      name: "Protocole de soins et prescriptions"
    },
    {
      key: "step_4",
      name: "Constituer un PTSI : T.I.M.E"
    },
    {
      key: "step_5",
      name: "Chargez des images de la plaie"
    }
  ];
  active_step = 0;

  constructor(
    private patientsService: PatientsService,
    private modalService: NgbModal,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.title = (this.selectedElement ? constants.UPDATE_ELEMENT : constants.CREATE_ELEMENT) + " " + this.title;
    this.data = {
      wound_id: this.wound?.id,
      patho: this.selectedElement ? this.selectedElement.patho : null,
      patho_dopler: this.selectedElement ? this.selectedElement.patho_dopler : null,
      patho_date: this.selectedElement ? this.selectedElement.patho_date : null,
      patho_operee: this.selectedElement ? this.selectedElement.patho_operee : null,
      tvp: this.selectedElement ? this.selectedElement.tvp : null,
      tvp_date: this.selectedElement ? this.selectedElement.tvp_date : null,
      contention: this.selectedElement ? this.selectedElement.contention : null,
      aomi: this.selectedElement ? this.selectedElement.aomi : null,
      aomi_doppler: this.selectedElement ? this.selectedElement.aomi_doppler : null,
      aomi_date: this.selectedElement ? this.selectedElement.aomi_date : null,
      cardiopathie: this.selectedElement ? this.selectedElement.cardiopathie : null,
      anticoagulant: this.selectedElement ? this.selectedElement.anticoagulant : null,
      tabac: this.selectedElement ? this.selectedElement.tabac : null,
      cholesterolemie: this.selectedElement ? this.selectedElement.cholesterolemie : null,
      hta: this.selectedElement ? this.selectedElement.hta : null,
      did: this.selectedElement ? this.selectedElement.did : null,
      dnid: this.selectedElement ? this.selectedElement.dnid : null,
      dnid_hbac: this.selectedElement ? this.selectedElement.dnid_hbac : null,
      dnid_date: this.selectedElement ? this.selectedElement.dnid_date : null,
      obesite: this.selectedElement ? this.selectedElement.obesite : null,
      denutrition: this.selectedElement ? this.selectedElement.denutrition : null,
      mobelite: this.selectedElement ? this.selectedElement.mobelite : null,
      allergie: this.selectedElement ? this.selectedElement.allergie : null,
      hygiene: this.selectedElement ? this.selectedElement.hygiene : null,
      ordonnance: this.selectedElement ? this.selectedElement.ordonnance : null,
      vat: this.selectedElement ? this.selectedElement.vat : null,
      bilan_sanguin: this.selectedElement ? this.selectedElement.bilan_sanguin : null,
      bilan_sanguin_date: this.selectedElement ? this.selectedElement.bilan_sanguin_date : null,
      bilan_sanguin_dfg: this.selectedElement ? this.selectedElement.bilan_sanguin_dfg : null,
      bilan_sanguin_gb: this.selectedElement ? this.selectedElement.bilan_sanguin_gb : null,
      bilan_sanguin_albumine: this.selectedElement ? this.selectedElement.bilan_sanguin_albumine : null,
      bilan_sanguin_crp: this.selectedElement ? this.selectedElement.bilan_sanguin_crp : null,
      douleur: this.selectedElement ? this.selectedElement.douleur : null,
      douleur_eva: this.selectedElement ? this.selectedElement.douleur_eva : null,
      douleur_spontanee: this.selectedElement ? this.selectedElement.douleur_spontanee : null,
      douleur_provoquee: this.selectedElement ? this.selectedElement.douleur_provoquee : null,
      douleur_intermittente: this.selectedElement ? this.selectedElement.douleur_intermittente : null,
      douleur_continue: this.selectedElement ? this.selectedElement.douleur_continue : null,
      antalgique: this.selectedElement ? this.selectedElement.antalgique : null,
      antalgique_niveau: this.selectedElement ? this.selectedElement.antalgique_niveau : null,
      plaie_siege: this.selectedElement ? this.selectedElement.plaie_siege : null,
      plaie_anciennete: this.selectedElement ? this.selectedElement.plaie_anciennete : null,
      plaie_date_episode: this.selectedElement ? this.selectedElement.plaie_date_episode : null,
      spontanee: this.selectedElement ? this.selectedElement.spontanee : null,
      traumatisme: this.selectedElement ? this.selectedElement.traumatisme : null,
      post_operatoire: this.selectedElement ? this.selectedElement.post_operatoire : null,
      ulcere: this.selectedElement ? this.selectedElement.ulcere : null,
      veineux: this.selectedElement ? this.selectedElement.veineux : null,
      arteriel: this.selectedElement ? this.selectedElement.arteriel : null,
      mixte: this.selectedElement ? this.selectedElement.mixte : null,
      mal_perf: this.selectedElement ? this.selectedElement.mal_perf : null,
      escarre_stade: this.selectedElement ? this.selectedElement.escarre_stade : null,
      hematome: this.selectedElement ? this.selectedElement.hematome : null,
      brulure_degre: this.selectedElement ? this.selectedElement.brulure_degre : null,
      dermabrasion: this.selectedElement ? this.selectedElement.dermabrasion : null,
      plaie_autre: this.selectedElement ? this.selectedElement.plaie_autre : null,
      soins_ide: this.selectedElement ? this.selectedElement.soins_ide : null,
      soins_frequence: this.selectedElement ? this.selectedElement.soins_frequence : null,
      soins_frequence_jours: this.selectedElement ? this.selectedElement.soins_frequence_jours : null,
      pansement_primaire: this.selectedElement ? this.selectedElement.pansement_primaire : null,
      pansement_primaire_deplace: this.selectedElement ? this.selectedElement.pansement_primaire_deplace : null,
      pansement_primaire_tenue: this.selectedElement ? this.selectedElement.pansement_primaire_tenue : null,
      pansement_primaire_tolerance: this.selectedElement ? this.selectedElement.pansement_primaire_tolerance : null,
      pansement_secondaire: this.selectedElement ? this.selectedElement.pansement_secondaire : null,
      pansement_secondaire_deplace: this.selectedElement ? this.selectedElement.pansement_secondaire_deplace : null,
      pansement_secondaire_tenue: this.selectedElement ? this.selectedElement.pansement_secondaire_tenue : null,
      pansement_secondaire_tolerance: this.selectedElement ? this.selectedElement.pansement_secondaire_tolerance : null,
      protocole_detersion: this.selectedElement ? this.selectedElement.protocole_detersion : null,
      protocole_anesth: this.selectedElement ? this.selectedElement.protocole_anesth : null,
      protocole_compresse: this.selectedElement ? this.selectedElement.protocole_compresse : null,
      protocole_bistouri: this.selectedElement ? this.selectedElement.protocole_bistouri : null,
      protocole_curette: this.selectedElement ? this.selectedElement.protocole_curette : null,
      protocole_douleur: this.selectedElement ? this.selectedElement.protocole_douleur : null,
      protocole_douleur_eva: this.selectedElement ? this.selectedElement.protocole_douleur_eva : null,
      protocole_prelevement: this.selectedElement ? this.selectedElement.protocole_prelevement : null,
      protocole_ecouvillon: this.selectedElement ? this.selectedElement.protocole_ecouvillon : null,
      protocole_curtage: this.selectedElement ? this.selectedElement.protocole_curtage : null,
      protocole_biopsie: this.selectedElement ? this.selectedElement.protocole_biopsie : null,
      protocole_pansement_primaire: this.selectedElement ? this.selectedElement.protocole_pansement_primaire : null,
      protocole_pansement_secondaire: this.selectedElement ? this.selectedElement.protocole_pansement_secondaire : null,
      protocole_peau_peri: this.selectedElement ? this.selectedElement.protocole_peau_peri : null,
      protocole_contention: this.selectedElement ? this.selectedElement.protocole_contention : null,
      protocole_contention_taille: this.selectedElement ? this.selectedElement.protocole_contention_taille : null,
      protocole_contention_type: this.selectedElement ? this.selectedElement.protocole_contention_type : null,
      protocole_antibiotherapie: this.selectedElement ? this.selectedElement.protocole_antibiotherapie : null,
      protocole_antibiotherapie_dose: this.selectedElement ? this.selectedElement.protocole_antibiotherapie_dose : null,
      protocole_antibiotherapie_duree: this.selectedElement ? this.selectedElement.protocole_antibiotherapie_duree : null,
      protocole_bilan: this.selectedElement ? this.selectedElement.protocole_bilan : null,
      protocole_radiographie: this.selectedElement ? this.selectedElement.protocole_radiographie : null,
      protocole_doppler_veineux: this.selectedElement ? this.selectedElement.protocole_doppler_veineux : null,
      protocole_doppler_arteriel: this.selectedElement ? this.selectedElement.protocole_doppler_arteriel : null,
      protocole_consultation: this.selectedElement ? this.selectedElement.protocole_consultation : null,
      protocole_photo: this.selectedElement ? this.selectedElement.protocole_photo : null,
      protocole_planimetrie: this.selectedElement ? this.selectedElement.protocole_planimetrie : null,
      observations: this.selectedElement ? this.selectedElement.observations : null,
      zone: this.selectedElement ? this.selectedElement.zone : null,
      phase: this.selectedElement ? this.selectedElement.phase : null,
      step: this.selectedElement ? this.selectedElement.step : null,
      stade: this.selectedElement ? this.selectedElement.stade : null,
      tissus: this.selectedElement ? this.selectedElement.tissus : null,
      inflammation: this.selectedElement ? this.selectedElement.inflammation : null,
      humidity: this.selectedElement ? this.selectedElement.humidity : null,
      berge_width: this.selectedElement ? this.selectedElement.berge_width : null,
      berge_height: this.selectedElement ? this.selectedElement.berge_height : null,
      wound_width: this.selectedElement ? this.selectedElement.wound_width : null,
      wound_height: this.selectedElement ? this.selectedElement.wound_height : null,
      wound_depth: this.selectedElement ? this.selectedElement.wound_depth : null,
      colorations: [],
      images: [],
      existing_colorations: [],
      existing_images: [],
      remove_colorations: [],
      remove_images: [],
    };
    if (this.selectedElement) {
      this.onPhaseChange(this.selectedElement.phase);
      this.data.existing_colorations = this.selectedElement.colors;
      this.data.existing_images = this.selectedElement.images;
    }
  }

  onClose() {
    this.closingEvent.emit();
  }

  toggleStatus() {
    this.data.enabled = !this.data.enabled;
  }

  async onSubmit() {
    const controls = Object.values(this.form.controls);
    for(let control of controls) {
      if(control.invalid) {
        return;
      }
    }
    const dataToSend = Utils.generateFormData(this.data);
    console.log(dataToSend)
    this.isLoading = true;
    if (this.selectedElement) {
      this.patientsService.update_ptsi(this.selectedElement.id, dataToSend).subscribe(
        (result) => {
          this.onSuccess(result);
        },
        (error) => {
          this.onError(error);
        }
      )
    } else {
      this.patientsService.create_ptsi(dataToSend).subscribe(
        (result) => {
          this.onSuccess(result);
        },
        (error) => {
          this.onError(error);
        }
      )
    }
  }

  onSuccess(result) {
    this.isLoading = false;
    this.reloadEvent.emit();
    this.modalService.dismissAll();
    this._snackBar.open('Enregistré avec succès!', 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['success-snackbar']
    });
  }

  onError(error) {
    this.isLoading = false;
    let errorDetails = error.error.data;
    for (let errorKey in errorDetails)
      this._snackBar.open(errorDetails[errorKey], 'Ok', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['danger-snackbar']
      });
  }


  getActiveStepName() {
    return this.steps[this.active_step].name;
  }

  changeStep(forward = true) {
    if (forward && this.active_step < this.steps.length - 1) {
      this.active_step++;
    } else if (!forward && this.active_step > 0) {
      this.active_step--;
    }
  }

  addColoration() {
    this.data.colorations.push({
      id: Utils.generateUniqueId(),
      color: null,
      percentage: null
    });
  }

  onSelectImage(event) {
    console.log(event);
    this.data.images.push(...event.addedFiles);
  }

  onRemoveImage(event) {
    console.log(event);
    this.data.images.splice(this.data.images.indexOf(event), 1);
  }

  removeColoration(index) {
    this.data.remove_colorations.push(this.data.existing_colorations[index].id);
    this.data.existing_colorations.splice(index, 1);
  }

  removeExistingImage(index) {
    this.data.remove_images.push(this.data.existing_images[index].id);
    this.data.existing_images.splice(index, 1);
  }

  trackByFn(index, item) {
    return item.id;
  }

  onPhaseChange(phase) {
    this.data.phase = phase;
    this.wound_steps = wound_steps[phase];
  }
  toggleFieldCheckbox(key) {
    this.data[key] = !this.data[key];
  }
}
