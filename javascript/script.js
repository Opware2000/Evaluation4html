function changer_cote_float()
{
  var item = document.getElementById('imageflottante');
  if (item.style.float == 'right')
    {
      item.style.float = 'left';
      item.style.marginLeft = "0";
      item.style.marginRight= "10px";
    }
  else
    {
      item.style.float ='right';
      item.style.marginLeft = "10px";
      item.style.marginRight= "0px";
    }
}

function raz_image()
{
  var item = document.getElementById('imageflottante');
  item.style.float = 'left';
  item.style.marginLeft = "0";
  item.style.marginRight= "10px";
}
