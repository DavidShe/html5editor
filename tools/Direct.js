var Direct = {};

// Начинаем рисование
Direct.start = function(evnt)
{
    // Текущее положение мыши - начальные координаты
    Direct.x = evnt.clientX;
    Direct.y = evnt.clientY;
    Direct.r = 10;

    Canva.ctx.beginPath();
    // Свойства рисования
    Canva.ctx.strokeStyle = Canva.selectedColor;
    Canva.ctx.lineWidth = Canva.selectedWidth;
    //Canva.ctx.moveTo(Direct.x, Direct.y); // Курсор на начальную позицию

    Canva.drawing = true; // Начато рисование
};

// Рисование закончили
Direct.finish = function(evnt)
{
    Direct.x2 = evnt.clientX;
    Direct.y2 = evnt.clientY;
    Canva.ctx.moveTo(Direct.x+20,Direct.y-30);
    Canva.ctx.quadraticCurveTo(Direct.x,Direct.y,Direct.x+20,Direct.y+30);
    Canva.ctx.lineTo(Direct.x+90,Direct.y+30);
    Canva.ctx.moveTo(Direct.x+20,Direct.y-30);
    Canva.ctx.lineTo(Direct.x+90,Direct.y-30);
    Canva.ctx.moveTo(Direct.x+90,Direct.y-30);
    Canva.ctx.quadraticCurveTo(Direct.x+70,Direct.y,Direct.x+90,Direct.y+30);
    Canva.ctx.moveTo(Direct.x+90,Direct.y-30);
    Canva.ctx.quadraticCurveTo(Direct.x+110,Direct.y,Direct.x+90,Direct.y+30);
    Canva.ctx.stroke();
    Canva.ctx.fill();
    Canva.drawing = false;
};

// Рисование в разгаре
Direct.move = function(evnt)
{
    if(evnt.x>Direct.x)
        Direct.r = evnt.x - Direct.x;
    else if(evnt.y>Direct.y)
        Direct.r = evnt.y-Direct.y;
    // Canva.ctx.moveTo(evnt.x, evnt.y);
};