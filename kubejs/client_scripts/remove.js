const toRemove = 
[
  'createaddition:bioethanol_bucket',

  'tfmg:copper_wire',

  'createcasing:vertical_brass_gearbox',
  'createcasing:brass_gearbox',

  'artifacts:everlasting_beef',
  'artifacts:eternal_steak',
  'artifacts:lucky_scarf',
  'artifacts:scarf_of_invisibility',
  'artifacts:rooted_boots',
  'artifacts:warp_drive',

  'create:dough',

  'createfisheryindustry:waxed_cardboard',

  'copycats:copycat_sliding_door', 
  'copycats:copycat_folding_door',

  'northstar:electrolysis_machine'
]

RecipeViewerEvents.removeEntriesCompletely('item', event => {
  toRemove.forEach(id => {
    event.remove(id)
  })
})
