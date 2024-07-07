var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CascoHistorico_Comayagua_1 = new ol.format.GeoJSON();
var features_CascoHistorico_Comayagua_1 = format_CascoHistorico_Comayagua_1.readFeatures(json_CascoHistorico_Comayagua_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CascoHistorico_Comayagua_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CascoHistorico_Comayagua_1.addFeatures(features_CascoHistorico_Comayagua_1);
var lyr_CascoHistorico_Comayagua_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CascoHistorico_Comayagua_1, 
                style: style_CascoHistorico_Comayagua_1,
                popuplayertitle: "Casco Historico_Comayagua",
                interactive: true,
                title: '<img src="styles/legend/CascoHistorico_Comayagua_1.png" /> Casco Historico_Comayagua'
            });
var format_Zonas_Afectadas_por_Inundacion_2 = new ol.format.GeoJSON();
var features_Zonas_Afectadas_por_Inundacion_2 = format_Zonas_Afectadas_por_Inundacion_2.readFeatures(json_Zonas_Afectadas_por_Inundacion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonas_Afectadas_por_Inundacion_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonas_Afectadas_por_Inundacion_2.addFeatures(features_Zonas_Afectadas_por_Inundacion_2);
var lyr_Zonas_Afectadas_por_Inundacion_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonas_Afectadas_por_Inundacion_2, 
                style: style_Zonas_Afectadas_por_Inundacion_2,
                popuplayertitle: "Zonas_Afectadas_por_Inundacion",
                interactive: true,
                title: '<img src="styles/legend/Zonas_Afectadas_por_Inundacion_2.png" /> Zonas_Afectadas_por_Inundacion'
            });
var format_RedVialPrincipal_CiudaddeComayagua_3 = new ol.format.GeoJSON();
var features_RedVialPrincipal_CiudaddeComayagua_3 = format_RedVialPrincipal_CiudaddeComayagua_3.readFeatures(json_RedVialPrincipal_CiudaddeComayagua_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedVialPrincipal_CiudaddeComayagua_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedVialPrincipal_CiudaddeComayagua_3.addFeatures(features_RedVialPrincipal_CiudaddeComayagua_3);
var lyr_RedVialPrincipal_CiudaddeComayagua_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedVialPrincipal_CiudaddeComayagua_3, 
                style: style_RedVialPrincipal_CiudaddeComayagua_3,
                popuplayertitle: "Red Vial Principal_Ciudad de Comayagua",
                interactive: true,
                title: '<img src="styles/legend/RedVialPrincipal_CiudaddeComayagua_3.png" /> Red Vial Principal_Ciudad de Comayagua'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_CascoHistorico_Comayagua_1.setVisible(true);lyr_Zonas_Afectadas_por_Inundacion_2.setVisible(true);lyr_RedVialPrincipal_CiudaddeComayagua_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CascoHistorico_Comayagua_1,lyr_Zonas_Afectadas_por_Inundacion_2,lyr_RedVialPrincipal_CiudaddeComayagua_3];
lyr_CascoHistorico_Comayagua_1.set('fieldAliases', {'Cod_Depart': 'Cod_Depart', 'Departamen': 'Departamen', 'Cod_Munici': 'Cod_Munici', 'Municipio': 'Municipio', 'Direccion': 'Direccion', 'No_Cliente': 'No_Cliente', 'Nombre_Cli': 'Nombre_Cli', 'Layer': 'Layer', 'Predio': 'Predio', 'Sector': 'Sector', 'Clave_Cata': 'Clave_Cata', 'Cuenta_cat': 'Cuenta_cat', 'Contribuye': 'Contribuye', 'Refname': 'Refname', 'Fotografia': 'Fotografia', 'Origen': 'Origen', 'Cla_adsp': 'Cla_adsp', 'Zona': 'Zona', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'CPA': 'CPA', });
lyr_Zonas_Afectadas_por_Inundacion_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_CLIP_I': 'FID_CLIP_I', 'FID_angiey': 'FID_angiey', 'Id': 'Id', 'FID_InunDI': 'FID_InunDI', 'Id_1': 'Id_1', 'FID_depart': 'FID_depart', 'ID_12': 'ID_12', 'DEPARTAMEN': 'DEPARTAMEN', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', 'COD_DEPTO': 'COD_DEPTO', 'SEX_H': 'SEX_H', 'SEX_M': 'SEX_M', 'densi_pobl': 'densi_pobl', 'masculino': 'masculino', 'den_pobl_0': 'den_pobl_0', 'area_km': 'area_km', 'mor_brut_0': 'mor_brut_0', 'n_bru_01': 'n_bru_01', 'm_inf_01': 'm_inf_01', 'm_nnat_01': 'm_nnat_01', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_RedVialPrincipal_CiudaddeComayagua_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CascoHistorico_Comayagua_1.set('fieldImages', {'Cod_Depart': 'TextEdit', 'Departamen': 'TextEdit', 'Cod_Munici': 'TextEdit', 'Municipio': 'TextEdit', 'Direccion': 'TextEdit', 'No_Cliente': 'TextEdit', 'Nombre_Cli': 'TextEdit', 'Layer': 'TextEdit', 'Predio': 'TextEdit', 'Sector': 'TextEdit', 'Clave_Cata': 'TextEdit', 'Cuenta_cat': 'TextEdit', 'Contribuye': 'TextEdit', 'Refname': 'TextEdit', 'Fotografia': 'TextEdit', 'Origen': 'TextEdit', 'Cla_adsp': 'TextEdit', 'Zona': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'CPA': 'TextEdit', });
lyr_Zonas_Afectadas_por_Inundacion_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_CLIP_I': 'TextEdit', 'FID_angiey': 'TextEdit', 'Id': 'TextEdit', 'FID_InunDI': 'TextEdit', 'Id_1': 'TextEdit', 'FID_depart': 'TextEdit', 'ID_12': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'HECTARES': 'TextEdit', 'COD_DEPTO': 'TextEdit', 'SEX_H': 'TextEdit', 'SEX_M': 'TextEdit', 'densi_pobl': 'TextEdit', 'masculino': 'TextEdit', 'den_pobl_0': 'TextEdit', 'area_km': 'TextEdit', 'mor_brut_0': 'TextEdit', 'n_bru_01': 'TextEdit', 'm_inf_01': 'TextEdit', 'm_nnat_01': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RedVialPrincipal_CiudaddeComayagua_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_CascoHistorico_Comayagua_1.set('fieldLabels', {'Cod_Depart': 'inline label - always visible', 'Departamen': 'inline label - always visible', 'Cod_Munici': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Direccion': 'inline label - always visible', 'No_Cliente': 'inline label - always visible', 'Nombre_Cli': 'inline label - always visible', 'Layer': 'inline label - always visible', 'Predio': 'inline label - always visible', 'Sector': 'inline label - always visible', 'Clave_Cata': 'inline label - always visible', 'Cuenta_cat': 'inline label - always visible', 'Contribuye': 'inline label - always visible', 'Refname': 'inline label - always visible', 'Fotografia': 'inline label - always visible', 'Origen': 'inline label - always visible', 'Cla_adsp': 'inline label - always visible', 'Zona': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'CPA': 'inline label - always visible', });
lyr_Zonas_Afectadas_por_Inundacion_2.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'FID_CLIP_I': 'inline label - always visible', 'FID_angiey': 'inline label - always visible', 'Id': 'inline label - always visible', 'FID_InunDI': 'inline label - always visible', 'Id_1': 'inline label - always visible', 'FID_depart': 'inline label - always visible', 'ID_12': 'inline label - always visible', 'DEPARTAMEN': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERIMETER': 'inline label - always visible', 'HECTARES': 'inline label - always visible', 'COD_DEPTO': 'inline label - always visible', 'SEX_H': 'inline label - always visible', 'SEX_M': 'inline label - always visible', 'densi_pobl': 'inline label - always visible', 'masculino': 'inline label - always visible', 'den_pobl_0': 'inline label - always visible', 'area_km': 'inline label - always visible', 'mor_brut_0': 'inline label - always visible', 'n_bru_01': 'inline label - always visible', 'm_inf_01': 'inline label - always visible', 'm_nnat_01': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_RedVialPrincipal_CiudaddeComayagua_3.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'inline label - always visible', 'begin': 'inline label - always visible', 'end': 'inline label - always visible', 'altitudeMo': 'inline label - always visible', 'tessellate': 'inline label - always visible', 'extrude': 'inline label - always visible', 'visibility': 'inline label - always visible', 'drawOrder': 'inline label - always visible', 'icon': 'inline label - always visible', });
lyr_RedVialPrincipal_CiudaddeComayagua_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});