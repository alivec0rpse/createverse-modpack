const toRemove = 
[
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

const recipesToRemove =
[
  'tfmg:constantan_wire_from_ingots_constantan_stonecutting',
  'tfmg:aluminum_wire_from_ingots_aluminum_stonecutting',

  'northstar:liquid_burning/biofuel',

  'createfisheryindustry:peeling/obsidian_peeling',
  'createfisheryindustry:peeling/rose_quartz_peeling',
  'createfisheryindustry:peeling/crying_obsdian',
  'createfisheryindustry:peeling/netherrack_peeling'
]

ServerEvents.recipes(event => {
  toRemove.forEach(id => {
    event.remove({output: id});
    event.remove({input: id});
  })
  recipesToRemove.forEach(id => {
    event.remove(id);
  })
});

ServerEvents.tags('item', event => {
  toRemove.forEach(id => {
    event.removeAllTagsFrom(id)
  })
});

ItemEvents.canPickUp(event => {
  if (toRemove.includes(event.item.item.id)) {
    event.cancel()
  }
})

BlockEvents.drops(event => {
  if (toRemove.includes(event.block.id)) {
    event.cancel()
  }
})

ServerEvents.tags('fluid', event => {
  event.remove('c:biofuel', 'createaddition:bioethanol')
  event.remove('c:biofuel', 'createaddition:flowing_bioethanol')
  event.add('c:biofuel', 'northstar:biofuel')
  event.add('c:biofuel', 'northstar:flowing_biofuel')
})