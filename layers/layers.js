var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_PoblacinpordeptoINDEC_3 = new ol.format.GeoJSON();
var features_PoblacinpordeptoINDEC_3 = format_PoblacinpordeptoINDEC_3.readFeatures(json_PoblacinpordeptoINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordeptoINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordeptoINDEC_3.addFeatures(features_PoblacinpordeptoINDEC_3);
var lyr_PoblacinpordeptoINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordeptoINDEC_3, 
                style: style_PoblacinpordeptoINDEC_3,
                interactive: true,
    title: 'Población por depto (INDEC)<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_0.png" /> 5.000 - 5.250<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_1.png" /> 5.251 - 11.100<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_2.png" /> 11.101 - 108.000<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_3.png" /> 108.001 o más<br />'
        });
var format_Viviendasrurales_4 = new ol.format.GeoJSON();
var features_Viviendasrurales_4 = format_Viviendasrurales_4.readFeatures(json_Viviendasrurales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Viviendasrurales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Viviendasrurales_4.addFeatures(features_Viviendasrurales_4);
var lyr_Viviendasrurales_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Viviendasrurales_4, 
                style: style_Viviendasrurales_4,
                interactive: true,
    title: 'Viviendas rurales<br />\
    <img src="styles/legend/Viviendasrurales_4_0.png" /> 1 - 220<br />\
    <img src="styles/legend/Viviendasrurales_4_1.png" /> 221 - 400<br />\
    <img src="styles/legend/Viviendasrurales_4_2.png" /> 401 - 980<br />\
    <img src="styles/legend/Viviendasrurales_4_3.png" /> 981 o más<br />'
        });
var format_PEAINDEC_5 = new ol.format.GeoJSON();
var features_PEAINDEC_5 = format_PEAINDEC_5.readFeatures(json_PEAINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_5.addFeatures(features_PEAINDEC_5);
var lyr_PEAINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_5, 
                style: style_PEAINDEC_5,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_5_0.png" /> Hasta 3.550<br />\
    <img src="styles/legend/PEAINDEC_5_1.png" /> 3.551 - 7.350<br />\
    <img src="styles/legend/PEAINDEC_5_2.png" /> 7.351 - 70.550<br />\
    <img src="styles/legend/PEAINDEC_5_3.png" /> 70.551 o más<br />'
        });
var format_Cabezasdeporcinos_6 = new ol.format.GeoJSON();
var features_Cabezasdeporcinos_6 = format_Cabezasdeporcinos_6.readFeatures(json_Cabezasdeporcinos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cabezasdeporcinos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cabezasdeporcinos_6.addFeatures(features_Cabezasdeporcinos_6);
var lyr_Cabezasdeporcinos_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cabezasdeporcinos_6, 
                style: style_Cabezasdeporcinos_6,
                interactive: true,
    title: 'Cabezas de porcinos<br />\
    <img src="styles/legend/Cabezasdeporcinos_6_0.png" /> 80 - 175<br />\
    <img src="styles/legend/Cabezasdeporcinos_6_1.png" /> 176 - 1.415<br />\
    <img src="styles/legend/Cabezasdeporcinos_6_2.png" /> Más de 1.416<br />'
        });
var format_Cabezasdeovinos_7 = new ol.format.GeoJSON();
var features_Cabezasdeovinos_7 = format_Cabezasdeovinos_7.readFeatures(json_Cabezasdeovinos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cabezasdeovinos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cabezasdeovinos_7.addFeatures(features_Cabezasdeovinos_7);
var lyr_Cabezasdeovinos_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cabezasdeovinos_7, 
                style: style_Cabezasdeovinos_7,
                interactive: true,
    title: 'Cabezas de ovinos<br />\
    <img src="styles/legend/Cabezasdeovinos_7_0.png" /> Hasta 150.000<br />\
    <img src="styles/legend/Cabezasdeovinos_7_1.png" /> 150.001 - 235.750<br />\
    <img src="styles/legend/Cabezasdeovinos_7_2.png" /> 235.751 - 510.000<br />\
    <img src="styles/legend/Cabezasdeovinos_7_3.png" /> 510.001 o más<br />'
        });
var format_Cabezasdecaprinos_8 = new ol.format.GeoJSON();
var features_Cabezasdecaprinos_8 = format_Cabezasdecaprinos_8.readFeatures(json_Cabezasdecaprinos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cabezasdecaprinos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cabezasdecaprinos_8.addFeatures(features_Cabezasdecaprinos_8);
var lyr_Cabezasdecaprinos_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cabezasdecaprinos_8, 
                style: style_Cabezasdecaprinos_8,
                interactive: true,
    title: 'Cabezas de caprinos<br />\
    <img src="styles/legend/Cabezasdecaprinos_8_0.png" /> 0<br />\
    <img src="styles/legend/Cabezasdecaprinos_8_1.png" /> 1 - 10<br />\
    <img src="styles/legend/Cabezasdecaprinos_8_2.png" /> 11 - 150<br />\
    <img src="styles/legend/Cabezasdecaprinos_8_3.png" /> 151 o más<br />'
        });
var format_Cabezasdebovinos_9 = new ol.format.GeoJSON();
var features_Cabezasdebovinos_9 = format_Cabezasdebovinos_9.readFeatures(json_Cabezasdebovinos_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cabezasdebovinos_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cabezasdebovinos_9.addFeatures(features_Cabezasdebovinos_9);
var lyr_Cabezasdebovinos_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cabezasdebovinos_9, 
                style: style_Cabezasdebovinos_9,
                interactive: true,
    title: 'Cabezas de bovinos<br />\
    <img src="styles/legend/Cabezasdebovinos_9_0.png" /> 1 - 100<br />\
    <img src="styles/legend/Cabezasdebovinos_9_1.png" /> 101 - 3.250<br />\
    <img src="styles/legend/Cabezasdebovinos_9_2.png" /> 3.251 - 21.000<br />\
    <img src="styles/legend/Cabezasdebovinos_9_3.png" /> 21.001 - 24.275<br />'
        });
var format_Hectreasdecerezos_10 = new ol.format.GeoJSON();
var features_Hectreasdecerezos_10 = format_Hectreasdecerezos_10.readFeatures(json_Hectreasdecerezos_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hectreasdecerezos_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hectreasdecerezos_10.addFeatures(features_Hectreasdecerezos_10);
var lyr_Hectreasdecerezos_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hectreasdecerezos_10, 
                style: style_Hectreasdecerezos_10,
                interactive: true,
    title: 'Hectáreas de cerezos<br />\
    <img src="styles/legend/Hectreasdecerezos_10_0.png" /> 0<br />\
    <img src="styles/legend/Hectreasdecerezos_10_1.png" /> 173<br />'
        });
var format_Capacitaciones2019tcnicas_11 = new ol.format.GeoJSON();
var features_Capacitaciones2019tcnicas_11 = format_Capacitaciones2019tcnicas_11.readFeatures(json_Capacitaciones2019tcnicas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2019tcnicas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2019tcnicas_11.addFeatures(features_Capacitaciones2019tcnicas_11);
var lyr_Capacitaciones2019tcnicas_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2019tcnicas_11, 
                style: style_Capacitaciones2019tcnicas_11,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2019tcnicas_11.png" /> Capacitaciones 2019 (técnicas)'
            });
var format_Capacitaciones2018tcnicas_12 = new ol.format.GeoJSON();
var features_Capacitaciones2018tcnicas_12 = format_Capacitaciones2018tcnicas_12.readFeatures(json_Capacitaciones2018tcnicas_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2018tcnicas_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2018tcnicas_12.addFeatures(features_Capacitaciones2018tcnicas_12);
var lyr_Capacitaciones2018tcnicas_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2018tcnicas_12, 
                style: style_Capacitaciones2018tcnicas_12,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2018tcnicas_12.png" /> Capacitaciones 2018 (técnicas)'
            });
var format_Capacitaciones2017tcnicas_13 = new ol.format.GeoJSON();
var features_Capacitaciones2017tcnicas_13 = format_Capacitaciones2017tcnicas_13.readFeatures(json_Capacitaciones2017tcnicas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2017tcnicas_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2017tcnicas_13.addFeatures(features_Capacitaciones2017tcnicas_13);
var lyr_Capacitaciones2017tcnicas_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2017tcnicas_13, 
                style: style_Capacitaciones2017tcnicas_13,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2017tcnicas_13.png" /> Capacitaciones 2017 (técnicas)'
            });
var format_LocalidadesSantaCruz_14 = new ol.format.GeoJSON();
var features_LocalidadesSantaCruz_14 = format_LocalidadesSantaCruz_14.readFeatures(json_LocalidadesSantaCruz_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesSantaCruz_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesSantaCruz_14.addFeatures(features_LocalidadesSantaCruz_14);
var lyr_LocalidadesSantaCruz_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalidadesSantaCruz_14, 
                style: style_LocalidadesSantaCruz_14,
                interactive: true,
                title: '<img src="styles/legend/LocalidadesSantaCruz_14.png" /> Localidades Santa Cruz'
            });
var format_BERSantaCruz_15 = new ol.format.GeoJSON();
var features_BERSantaCruz_15 = format_BERSantaCruz_15.readFeatures(json_BERSantaCruz_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERSantaCruz_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERSantaCruz_15.addFeatures(features_BERSantaCruz_15);
var lyr_BERSantaCruz_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERSantaCruz_15, 
                style: style_BERSantaCruz_15,
                interactive: true,
                title: '<img src="styles/legend/BERSantaCruz_15.png" /> BER Santa Cruz'
            });
var format_BERSantaCruz_16 = new ol.format.GeoJSON();
var features_BERSantaCruz_16 = format_BERSantaCruz_16.readFeatures(json_BERSantaCruz_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERSantaCruz_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERSantaCruz_16.addFeatures(features_BERSantaCruz_16);
var lyr_BERSantaCruz_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERSantaCruz_16, 
                style: style_BERSantaCruz_16,
                interactive: true,
                title: '<img src="styles/legend/BERSantaCruz_16.png" /> BER Santa Cruz'
            });
var format_DelegacinSantaCruz_17 = new ol.format.GeoJSON();
var features_DelegacinSantaCruz_17 = format_DelegacinSantaCruz_17.readFeatures(json_DelegacinSantaCruz_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelegacinSantaCruz_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelegacinSantaCruz_17.addFeatures(features_DelegacinSantaCruz_17);
var lyr_DelegacinSantaCruz_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DelegacinSantaCruz_17, 
                style: style_DelegacinSantaCruz_17,
                interactive: true,
                title: '<img src="styles/legend/DelegacinSantaCruz_17.png" /> Delegación Santa Cruz'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_PoblacinpordeptoINDEC_3.setVisible(true);lyr_Viviendasrurales_4.setVisible(true);lyr_PEAINDEC_5.setVisible(true);lyr_Cabezasdeporcinos_6.setVisible(true);lyr_Cabezasdeovinos_7.setVisible(true);lyr_Cabezasdecaprinos_8.setVisible(true);lyr_Cabezasdebovinos_9.setVisible(true);lyr_Hectreasdecerezos_10.setVisible(true);lyr_Capacitaciones2019tcnicas_11.setVisible(true);lyr_Capacitaciones2018tcnicas_12.setVisible(true);lyr_Capacitaciones2017tcnicas_13.setVisible(true);lyr_LocalidadesSantaCruz_14.setVisible(true);lyr_BERSantaCruz_15.setVisible(true);lyr_BERSantaCruz_16.setVisible(true);lyr_DelegacinSantaCruz_17.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamentos_2,lyr_PoblacinpordeptoINDEC_3,lyr_Viviendasrurales_4,lyr_PEAINDEC_5,lyr_Cabezasdeporcinos_6,lyr_Cabezasdeovinos_7,lyr_Cabezasdecaprinos_8,lyr_Cabezasdebovinos_9,lyr_Hectreasdecerezos_10,lyr_Capacitaciones2019tcnicas_11,lyr_Capacitaciones2018tcnicas_12,lyr_Capacitaciones2017tcnicas_13,lyr_LocalidadesSantaCruz_14,lyr_BERSantaCruz_15,lyr_BERSantaCruz_16,lyr_DelegacinSantaCruz_17];
lyr_Departamentos_2.set('fieldAliases', {'Depto.': 'Depto.', });
lyr_PoblacinpordeptoINDEC_3.set('fieldAliases', {'poblacion': 'poblacion', });
lyr_Viviendasrurales_4.set('fieldAliases', {'Viv. Rur': 'Viv. Rur', });
lyr_PEAINDEC_5.set('fieldAliases', {'PEA': 'PEA', });
lyr_Cabezasdeporcinos_6.set('fieldAliases', {'Porcinos': 'Porcinos', });
lyr_Cabezasdeovinos_7.set('fieldAliases', {'Ovinos': 'Ovinos', });
lyr_Cabezasdecaprinos_8.set('fieldAliases', {'Caprinos': 'Caprinos', });
lyr_Cabezasdebovinos_9.set('fieldAliases', {'Bovinos': 'Bovinos', });
lyr_Hectreasdecerezos_10.set('fieldAliases', {'Cerezas': 'Cerezas', });
lyr_Capacitaciones2019tcnicas_11.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo Capa.': 'Tipo Capa.', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Capacitaciones2018tcnicas_12.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo Capa.': 'Tipo Capa.', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Capacitaciones2017tcnicas_13.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo Capa.': 'Tipo Capa.', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_LocalidadesSantaCruz_14.set('fieldAliases', {'localidad': 'localidad', 'personas': 'personas', });
lyr_BERSantaCruz_15.set('fieldAliases', {'Nro.': 'Nro.', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_BERSantaCruz_16.set('fieldAliases', {'Nro.': 'Nro.', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_DelegacinSantaCruz_17.set('fieldAliases', {'Localidad': 'Localidad', 'Prest 2016': 'Prest 2016', 'Prest 2017': 'Prest 2017', 'Prest 2018': 'Prest 2018', 'Prest 2019': 'Prest 2019', 'Prest 2020': 'Prest 2020', 'Direccion': 'Direccion', });
lyr_Departamentos_2.set('fieldImages', {'Depto.': '', });
lyr_PoblacinpordeptoINDEC_3.set('fieldImages', {'poblacion': 'TextEdit', });
lyr_Viviendasrurales_4.set('fieldImages', {'Viv. Rur': 'TextEdit', });
lyr_PEAINDEC_5.set('fieldImages', {'PEA': 'TextEdit', });
lyr_Cabezasdeporcinos_6.set('fieldImages', {'Porcinos': 'TextEdit', });
lyr_Cabezasdeovinos_7.set('fieldImages', {'Ovinos': 'TextEdit', });
lyr_Cabezasdecaprinos_8.set('fieldImages', {'Caprinos': 'TextEdit', });
lyr_Cabezasdebovinos_9.set('fieldImages', {'Bovinos': 'TextEdit', });
lyr_Hectreasdecerezos_10.set('fieldImages', {'Cerezas': 'TextEdit', });
lyr_Capacitaciones2019tcnicas_11.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo Capa.': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'TextEdit', });
lyr_Capacitaciones2018tcnicas_12.set('fieldImages', {'Localidad': '', 'Tipo Capa.': '', 'Tematica': '', 'Fechas': '', 'Asistentes': '', });
lyr_Capacitaciones2017tcnicas_13.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo Capa.': '', 'Tematica': '', 'Fechas': '', 'Asistentes': '', });
lyr_LocalidadesSantaCruz_14.set('fieldImages', {'localidad': 'TextEdit', 'personas': 'TextEdit', });
lyr_BERSantaCruz_15.set('fieldImages', {'Nro.': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': 'TextEdit', });
lyr_BERSantaCruz_16.set('fieldImages', {'Nro.': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': 'TextEdit', });
lyr_DelegacinSantaCruz_17.set('fieldImages', {'Localidad': 'TextEdit', 'Prest 2016': 'Range', 'Prest 2017': 'Range', 'Prest 2018': 'Range', 'Prest 2019': 'Range', 'Prest 2020': 'Range', 'Direccion': 'TextEdit', });
lyr_Departamentos_2.set('fieldLabels', {'Depto.': 'inline label', });
lyr_PoblacinpordeptoINDEC_3.set('fieldLabels', {'poblacion': 'inline label', });
lyr_Viviendasrurales_4.set('fieldLabels', {'Viv. Rur': 'inline label', });
lyr_PEAINDEC_5.set('fieldLabels', {'PEA': 'inline label', });
lyr_Cabezasdeporcinos_6.set('fieldLabels', {'Porcinos': 'inline label', });
lyr_Cabezasdeovinos_7.set('fieldLabels', {'Ovinos': 'inline label', });
lyr_Cabezasdecaprinos_8.set('fieldLabels', {'Caprinos': 'inline label', });
lyr_Cabezasdebovinos_9.set('fieldLabels', {'Bovinos': 'inline label', });
lyr_Hectreasdecerezos_10.set('fieldLabels', {'Cerezas': 'inline label', });
lyr_Capacitaciones2019tcnicas_11.set('fieldLabels', {'Localidad': 'inline label', 'Tipo Capa.': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Capacitaciones2018tcnicas_12.set('fieldLabels', {'Localidad': 'inline label', 'Tipo Capa.': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Capacitaciones2017tcnicas_13.set('fieldLabels', {'Localidad': 'inline label', 'Tipo Capa.': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_LocalidadesSantaCruz_14.set('fieldLabels', {'localidad': 'inline label', 'personas': 'inline label', });
lyr_BERSantaCruz_15.set('fieldLabels', {'Nro.': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_BERSantaCruz_16.set('fieldLabels', {'Nro.': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_DelegacinSantaCruz_17.set('fieldLabels', {'Localidad': 'inline label', 'Prest 2016': 'inline label', 'Prest 2017': 'inline label', 'Prest 2018': 'inline label', 'Prest 2019': 'inline label', 'Prest 2020': 'inline label', 'Direccion': 'inline label', });
lyr_DelegacinSantaCruz_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});