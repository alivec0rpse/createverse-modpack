StartupEvents.modifyCreativeTab('createaddition:createaddition', event => {
  const toRemove = 
  [
    'createaddition:bioethanol_bucket',
  ]
  toRemove.forEach(id => {
    event.remove(id)
  })
})

StartupEvents.modifyCreativeTab('tfmg:tfmg_main', event => {
  const toRemove = 
  [
    'tfmg:copper_wire'
  ]
  toRemove.forEach(id => {
    event.remove(id)
  })
})

StartupEvents.modifyCreativeTab('artifacts:main', event => {
  const toRemove = 
  [
    'createcasing:vertical_brass_gearbox',
    'createcasing:brass_gearbox'
  ]
  toRemove.forEach(id => {
    event.remove(id)
  })
})

StartupEvents.modifyCreativeTab('artifacts:main', event => {
  const toRemove = 
  [
    'artifacts:everlasting_beef',
    'artifacts:eternal_steak',
    'artifacts:lucky_scarf',
    'artifacts:scarf_of_invisibility',
    'artifacts:rooted_boots',
    'artifacts:warp_drive'
  ]
  toRemove.forEach(id => {
    event.remove(id)
  })
})

StartupEvents.modifyCreativeTab('createfisheryindustry:fishery_tab', event => {
  const toRemove = 
  [
    'createfisheryindustry:waxed_cardboard'
  ]
  toRemove.forEach(id => {
    event.remove(id)
  })
})

StartupEvents.modifyCreativeTab('copycats:functional', event => {
  const toRemove = 
  [
    'copycats:copycat_sliding_door', 
    'copycats:copycat_folding_door'
  ]
  toRemove.forEach(id => {
    event.remove(id)
  })
})

StartupEvents.modifyCreativeTab('minecraft:search', event => {
  const toRemove = 
  [
    'northstar:electrolysis_machine'
  ]
  toRemove.forEach(id => {
    event.remove(id)
  })
})

