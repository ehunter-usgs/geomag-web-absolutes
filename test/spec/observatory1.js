'use strict';

var observatory1 = {
  'instruments':[
    {
      'id':3,
      'observatory_id':1,
      'serial_number':'154162',
      'begin':0,
      'end':1325375999000,
      'name':'Electronics',
      'type':'elec'
    },
    {
      'id':1,
      'observatory_id':1,
      'serial_number':'814503',
      'begin':1325376000000,
      'end':null,
      'name':'Electronics',
      'type':'elec'
    },
    {
      'id':4,
      'observatory_id':1,
      'serial_number':'035',
      'begin':0,
      'end':1325375999000,
      'name':'Theodolite',
      'type':'theo'
    },
    {
      'id':2,
      'observatory_id':1,
      'serial_number':'110',
      'begin':1325376000000,
      'end':null,
      'name':'Theodolite',
      'type':'theo'
    }
  ],
  'observations':[
    {
      'id':13,'observatory_id':1,
      'begin':1357848180000,
      'end':null,
      'reviewer_user_id':null,
      'mark_id':1,
      'electronics_id':1,
      'theodolite_id':2,
      'pier_temperature':0,
      'elect_temperature':23.1,
      'flux_temperature':21.5,
      'proton_temperature':10.4,
      'annotation':'loaded from BOU20130102003.bns on 2014-02-12 10:13'
    },
    {
      'id':12,'observatory_id':1,
      'begin':1357593240000,
      'end':null,
      'reviewer_user_id':null,
      'mark_id':1,
      'electronics_id':1,
      'theodolite_id':null,
      'pier_temperature':23.2,
      'elect_temperature':23.1,
      'flux_temperature':21.5,
      'proton_temperature':13.3,
      'annotation':'loaded from BOU20130072114.bns on 2014-02-12 10:13'
    },
    {
      'id':11,'observatory_id':1,
      'begin':1357240080000,
      'end':null,
      'reviewer_user_id':null,
      'mark_id':1,
      'electronics_id':1,
      'theodolite_id':2,
      'pier_temperature':20,
      'elect_temperature':23.1,
      'flux_temperature':21.4,
      'proton_temperature':6.2,
      'annotation':'loaded from BOU20130031908.bns on 2014-02-12 10:13'
    },
    {
      'id':10,'observatory_id':1,
      'begin':1356987120000,
      'end':null,
      'reviewer_user_id':null,
      'mark_id':1,
      'electronics_id':1,
      'theodolite_id':null,
      'pier_temperature':0,
      'elect_temperature':23.1,
      'flux_temperature':21.4,
      'proton_temperature':6,
      'annotation':'loaded from BOU20123662052.bns on 2014-02-12 10:13'
    },
    {
      'id':9,'observatory_id':1,
      'begin':1356641340000,
      'end':null,
      'reviewer_user_id':null,
      'mark_id':1,
      'electronics_id':1,
      'theodolite_id':2,
      'pier_temperature':19,
      'elect_temperature':23.2,
      'flux_temperature':21.5,
      'proton_temperature':5.3,
      'annotation':'loaded from BOU20123622049.bns on 2014-02-12 10:13'
    },
    {
      'id':8,'observatory_id':1,
      'begin':1356038280000,
      'end':null,
      'reviewer_user_id':null,
      'mark_id':1,
      'electronics_id':1,
      'theodolite_id':2,
      'pier_temperature':0,
      'elect_temperature':23.2,
      'flux_temperature':21.6,
      'proton_temperature':10.4,
      'annotation':'loaded from BOU20123552118.bns on 2014-02-12 10:13'
    },
    {
      'id':7,'observatory_id':1,
      'begin':1325282400000,
      'end':null,
      'reviewer_user_id':null,
      'mark_id':1,
      'electronics_id':null,
      'theodolite_id':null,
      'pier_temperature':15,
      'elect_temperature':23.4,
      'flux_temperature':21.9,
      'proton_temperature':18.9,
      'annotation':'loaded from BOU20113642200.bns on 2014-02-12 10:13'
    },
    {
      'id':6,'observatory_id':1,
      'begin':1318017780000,
      'end':null,
      'reviewer_user_id':null,
      'mark_id':1,
      'electronics_id':null,
      'theodolite_id':4,
      'pier_temperature':0,
      'elect_temperature':23.6,
      'flux_temperature':22.4,
      'proton_temperature':25.9,
      'annotation':'loaded from BOU20112802003.bns on 2014-02-12 10:13'
    },
    {
      'id':5,
      'observatory_id':1,
      'begin':1295372340000,
      'end':null,
      'reviewer_user_id':null,
      'mark_id':1,
      'electronics_id':3,
      'theodolite_id':4,
      'pier_temperature':0,
      'elect_temperature':21.7,
      'flux_temperature':17.3,
      'proton_temperature':-3.5,
      'annotation':'loaded from BOU20110181739.bns on 2014-02-12 10:13'
    },
    {
      'id':4,
      'observatory_id':1,
      'begin':1292620260000,
      'end':null,
      'reviewer_user_id':null,
      'mark_id':1,
      'electronics_id':null,
      'theodolite_id':4,
      'pier_temperature':20,
      'elect_temperature':20.6,
      'flux_temperature':9,
      'proton_temperature':-6.5,
      'annotation':'loaded from BOU20103512111.bns on 2014-02-12 10:13'
    },
    {
      'id':3,
      'observatory_id':1,
      'begin':1287175080000,
      'end':null,
      'reviewer_user_id':null,
      'mark_id':1,
      'electronics_id':3,
      'theodolite_id':4,
      'pier_temperature':21,
      'elect_temperature':22.4,
      'flux_temperature':11.2,
      'proton_temperature':8.7,
      'annotation':'loaded from BOU20102882038.bns on 2014-02-12 10:13'
    }
  ],
  'piers':[
    {
      'id':1,
      'observatory_id':1,
      'name':'Main',
      'begin':0,
      'end':null,
      'correction':-23.1,
      'default_mark_id':1,
      'default_electronics_id':1,
      'default_theodolite_id':2,
      'marks':[{
        'id':1,
        'pier_id':1,
        'name':'AZ',
        'begin':0,
        'end':null,
        'azimuth':199.1383
      }]
    }
  ],
  'id':1,
  'code':'BOU',
  'name':'Boulder (BOU)',
  'default_pier_id':1,
  'location':'Boulder, CO',
  'latitude':40.1375,
  'longitude':105.2372,
  'geomagnetic_latitude':48.4,
  'geomagnetic_longitude':320.59,
  'elevation':1682,
  'orientation':'HDZF'
}

module.exports = observatory1;
