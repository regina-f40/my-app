import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { MainPageComponent } from "../main-page/main-page.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-about',
    standalone: true,
    template: `
    <app-main-page></app-main-page>
    <div>
       <div class="about"> 
        <div class="testo">
            <div class='nome'>
                <h1>Andrea Pepiciello</h1>
            </div>
            <div class='bio'>
                <p>
                Andrea Pepiciello es un talentoso fotógrafo italiano 
                conocido por su estilo único y su habilidad para 
                capturar momentos espontáneos. Nacido en Italia, 
                Andrea desarrolló desde joven una pasión por la fotografía, 
                lo que lo llevó a explorar este arte de manera profesional.
                </p>
            </div>
        </div>
        <div class="testo">
                <p>
                Andrea estudió en la prestigiosa academia de fotografía 
                John Kaverdash en Milán, donde se especializó en la técnica 
                del "stylelife", que combina la fotografía de estilo de vida 
                con un enfoque artístico y personal. Esta formación le permitió 
                esarrollar una sensibilidad especial para capturar la esencia de 
                los momentos cotidianos y las emociones sinceras, lo que se ha 
                convertido en su sello distintivo.  
                </p>
        </div>
        <div class="testo">
                <p>
                Después de completar sus estudios en Milán, Andrea decidió expandir 
                sus horizontes profesionales y se mudó a Londres, donde trabajó en 
                diversos proyectos fotográficos. En la capital británica, perfeccionó 
                su estilo y se especializó en la "foto robada", una técnica que consiste 
                en capturar momentos inesperados y genuinos, mostrando la belleza de lo 
                natural y lo no posado.    
                </p>
        </div>
        <div class="testo">
                <p>
                Apasionado por la fotografía en blanco y negro, Andrea encuentra en esta 
                técnica una manera de resaltar la emoción y la profundidad de sus imágenes. 
                Su trabajo en blanco y negro es conocido por su capacidad para transmitir una 
                atmósfera única y evocar sentimientos profundos en quienes observan sus fotos.    
                </p>
        </div>
        <div class="testo">
                <p>
                Además de su carrera como fotógrafo, Andrea Pepiciello es un poeta prolífico. 
                A menudo, sus poemas acompañan sus fotografías, creando una narrativa visual 
                y escrita que complementa y enriquece su obra.    
                </p>
        </div>
        <div class="testo">
                <p>
                Actualmente, Andrea está especializado en fotografía de eventos, con un enfoque 
                particular en bodas y ceremonias. Su capacidad para capturar momentos auténticos 
                y emociones reales lo ha convertido en un fotógrafo muy solicitado para estos 
                eventos tan especiales. Además, Andrea ofrece servicios para la creación de 
                "personal books", sesiones fotográficas personalizadas que destacan la 
                personalidad y estilo único de cada cliente.    
                </p>
        </div>
        <div class="testo last">
                <p>
                Con su mezcla de talento, formación y pasión tanto por la fotografía como por 
                la poesía, Andrea Pepiciello sigue dejando su huella en el mundo del arte visual, 
                creando imágenes que cuentan historias y capturan la esencia de la vida.    
                </p>
        </div>
       </div>
    </div>
    
    `,
    styleUrl: './about.component.css',
    imports: [HomeComponent, MainPageComponent, FooterComponent]
})
export class AboutComponent {

}
