$(function(){
  activateNestedForms();
});

function activateNestedForms() {
  $('.nested-wrapper').each(function(){
    var wrapper = $(this);
    
    makeNestedItemsDestroyable(wrapper);
    
    var addLink = $('<a/>').text('add another').addClass('add-nested');
    addLink.click(appendNestedItem);
    wrapper.append(addLink);
  });
  $('.nested a.remove-nested').live('click',removeNestedItem);
}

function makeNestedItemsDestroyable(wrapper) {
  wrapper.find('.nested').each(function(){
    var nestedItem = $(this);
    var destroyLink = $('<a/>').text('remove').addClass('remove-nested');
    destroyLink.css('float','right');
    nestedItem.find('label').first().prepend(destroyLink);
  })
}

function appendNestedItem() {
  var addLink = $(this);
  var nestedItem = addLink.parent().find('.nested').first().clone().show();
  nestedItem.find('input, select').each(function(){
    var input = $(this);
    var timestamp = new Date();
    timestamp = timestamp.valueOf();
    input.attr('id', input.attr('id').replace(/([_\[])\d+([\]_])/,'$1'+timestamp+'$2'));
    input.attr('name', input.attr('name').replace(/([_\[])\d+([\]_])/,'$1'+timestamp+'$2'));
    input.val('');
  });
  addLink.before(nestedItem);
}

function removeNestedItem() {
  var destroyLink = $(this);
  var nestedItem = destroyLink.closest('.nested');
  var inputNameExample = nestedItem.find('input').first().attr('name');
  var idFieldName = inputNameExample.replace(/\[[^\]]*\]$/,'[id]');
  if($("input[name='"+idFieldName+"']").length) {
    var destroyFlagName = inputNameExample.replace(/\[[^\]]*\]$/,'[_destroy]')
    var destroyFlag = $('<input/>').attr('name',destroyFlagName).attr('type','hidden').val('true');
    $("input[name='"+idFieldName+"']").after(destroyFlag);
  }
  nestedItem.hide();
}