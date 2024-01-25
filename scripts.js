function noLayout(){
    document.getElementById('cards').classList.value = '';
}
<script>
function horizontalLayout(){
    noLayout();
    document.getElementById('cards').classList.add('horizontal');
}
</script>
function verticalLayout(){
    noLayout();
    document.getElementById('cards').classList.add('vertical');
}

function gridLayout(){
    noLayout();
    document.getElementById('cards').classList.add('grid');
}
