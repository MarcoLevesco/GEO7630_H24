function generateEspaceVert() {
    map.addSource('DD891050.Espaces_Verts-source', {
        'type': 'vector',
        'tiles': ["https://shiny-trout-5ggj46wgpj7w37qjr-8801.app.github.dev/DD891050.Espaces_Verts/{z}/{x}/{y}.pbf"]
    });
    map.addLayer({
        'id': 'DD891050.Espaces_Verts',
        'type': 'fill', // Changé le type de géométrie à 'fill' pour afficher une zone remplie
        'source': 'DD891050.Espaces_Verts-source',
        'source-layer': 'DD891050.Espaces_Verts-source', // Correction de la valeur de source-layer
        "paint": {
            "fill-color": "rgba(62, 154, 76, 0.5)" // Modification de la couleur et ajout de l'opacité
        }
    });
}

const EspacesVerts = document.querySelector('#EspacesVertsCheckbox'); // Correction du nom de la constante

EspacesVerts.addEventListener('change', (event) => {
    if (event.target.checked) {
        generateEspaceVert();
    } else {
        // Supprimer la couche de la carte
        map.removeLayer('DD891050.Espaces_Verts');
        // Supprimer la source de données de la carte
        map.removeSource('DD891050.Espaces_Verts-source');
    }
});