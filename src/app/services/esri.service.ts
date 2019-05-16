import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { loadModules } from 'esri-loader';
//import esri = __esri;

@Injectable({
  providedIn: 'root'
})
export class EsriService {

  private mapInitialisedSource = new Subject<void>();
  public mapInitialised$ = this.mapInitialisedSource.asObservable();

  private locateCompleteSource = new Subject<void>();
  public locateComplete$ = this.locateCompleteSource.asObservable();

  _polygonSymbol3D: any;
  _extrudeSymbol3DLayer: any;
  _objectSymbol3DLayer: any;
  _lineSymbol3D: any;
  _pathSymbol3DLayer : any;
  _graphic: any; //esri.Graphic;
  _graphicsLayer: any; //esri.GraphicsLayer;
  _mesh: any;
  _polygon: any; //esri.Geometry.Polygon;
  _point: any; //esri.Geometry.Point;
  _map: any; //esri.Map;
  _mapView: any; //esri.MapView;
  _sceneView: any; //esri.SceneView; 

  constructor() { }

  public create3DMap(mapElement :any)
  {
    loadModules([
      'esri/Map',
      'esri/views/MapView',
      'esri/views/SceneView',
      'esri/layers/GraphicsLayer',
      'esri/Graphic',
      "esri/geometry/Polygon",
      'esri/geometry/Point',
      'esri/symbols/PolygonSymbol3D',
      'esri/symbols/ExtrudeSymbol3DLayer',
      'esri/symbols/ObjectSymbol3DLayer',
      'esri/symbols/LineSymbol3D',
      'esri/symbols/PathSymbol3DLayer',
      'esri/geometry/Mesh'
    ])
      .then(([EsriMap, EsriMapView, EsriSceneView, EsriGraphicsLayer, EsriGraphic, EsriPolygon,EsriPoint, 
        EsriPolygonSymbol3D, EsriExtrudeSymbol3DLayer, EsriObjectSymbol3DLayer, EsriLineSymbol3D, EsriPathSymbol3DLayer, EsriMesh]) => {

        this._extrudeSymbol3DLayer = EsriExtrudeSymbol3DLayer;
        this._polygonSymbol3D = EsriPolygonSymbol3D;
        this._objectSymbol3DLayer = EsriObjectSymbol3DLayer;
        this._lineSymbol3D = EsriLineSymbol3D;
        this._pathSymbol3DLayer = EsriPathSymbol3DLayer;
        
        this._graphic = EsriGraphic;

        this._mesh = EsriMesh;

        this._graphicsLayer = EsriGraphicsLayer;

        this._polygon = EsriPolygon;
        this._point = EsriPoint;

        this._map = new EsriMap({
           basemap: "streets-night-vector",
           //basemap: "gray",
          //  basemap: "streets",
           // basemap: "hybrid",
            ground: "world-elevation"
       });

        this._sceneView = new EsriSceneView({
          container:mapElement,     
          map: this._map,   

         // var view = new SceneView({
            camera: {
              position: {
                x: -74, // lon
                y: 40.42,   // lat
                z: 22654 // elevation in meters
              },
          
              tilt: 65
            }
          //   camera: { 
          //    // position: [
          //   //     //  -0.08156023780775738, // lon, left and right
          //   //     //  51.50904072030298, // lat, up and down

          //   //  //   2.336006, 48.860818,
          //   //  //     550  // elevation in meters
          //   //   ],
         
      });

     
      this._sceneView.when(() => {
          // All the resources in the MapView and the map have loaded. Now execute additional processes
          this.mapInitialisedSource.next();

        // this.addCityGraphics();
        this.addGraphic3D(40.71427, -74.00597);

        }, err => {
          console.error(err);
        });

      })
      .catch(err => {
        console.error(err);
      });
  }

  public goTo(lat: any, lon: any)
  {
    let that = this;

    // let sv = {
    //   position: {
    //     x: lon, // lon
    //     y: lat,   // lat
    //     z: 22654 // elevation in meters
    //   },
  
    //   tilt: 45
    // };


    this._sceneView.goTo([lon,lat]).then(function () {
      //this._sceneView.goTo(sv).then(function () {
      //that._mapView.zoom = that._mapView.zoom - 1;
      debugger;
      that.addGraphic3D(lat, lon);
      that.locateCompleteSource.next();


     
    });
  }

  public addGraphic3D(lat: any, lon: any) // IEvent)
  {
    //this._sceneView.graphics.clear();
    //this._sceneView.graphics.removeAll();

    var point = new this._point(
      {
       latitude: lat,
       longitude: lon
      });

      var pointGraphic = new this._graphic({
        geometry: point,
        //symbol: this.generateCylinderSymbol2((Math.floor(Math.random() * 32) + 10) *10000)
        symbol: this.generateCylinderSymbol2(6000)
      }); 

      this._sceneView.graphics.add(pointGraphic);
  }

  private generateCylinderSymbol2(height :number)
  {
    var res =  {
     type: "point-3d",  // autocasts as new PointSymbol3D()
     symbolLayers: [{
       type: "object",  // autocasts as new ObjectSymbol3DLayer()
       width: 1500,  // diameter of the object from east to west in meters
       height:height,
     //  height: 320000,  // height of the object in meters
       depth: 1500,  // diameter of the object from north to south in meters
      resource: { primitive: "cylinder" },
       material: { color: "orangered" }
     }]
   };
 
   return res;
 
  }
}
