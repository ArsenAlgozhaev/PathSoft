function TW1 () {
    var
      count = 0
      block = $( '#outputText1' )
      interval = setInterval( function () {
        count++
        
        block.text( count )
        
        if( count === 10 ) {
            clearInterval( interval )
        }
        }, 150 )
    
    block.text( count )
}

function TW2 () {
    var
      count = 0,
      block = $( '#outputText2' ),
      interval = setInterval( function () {
        count++;
        
        block.text( count + "K" );
        
        if( count === 2 ) {
            clearInterval( interval );
        }
        }, 200 );
    
    block.text( count + "K" );
}

function TW3 () {
    var
      count = 0,
      block = $( '#outputText3' ),
      interval = setInterval( function () {
        count++;
        
        block.text( count );
        
        if( count === 40 ) {
            clearInterval( interval );
        }
        }, 45 );
    
    block.text( count );
}

function TW4 () {
    var
      count = 0,
      block = $( '#outputText4' ),
      interval = setInterval( function () {
        count++;
        
        block.text( count );
        
        if( count === 160 ) {
            clearInterval( interval );
        }
        }, 10 );
    
    block.text( count );
}

$(document).ready(function(){
    $('#outputText4').viewportChecker({
        callbackFunction: function(){
            TW1()
            TW2()
            TW3()
            TW4()
        },
    });
});