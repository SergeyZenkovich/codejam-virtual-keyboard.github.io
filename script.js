const body = document.querySelector('body');
const container = document.createElement('div');
const area = document.createElement('div');
let shift = false;
let langRU;

// -----define language --------
if (localStorage.getItem('lang') === 'false') {
  langRU = false;
} else {
  langRU = true;
}

//------create text area field --------
area.insertAdjacentHTML(
  'afterbegin',
  `
    <textarea rows="5" cols="33" id="text_area" name="name" autofocus></textarea>`
);
container.className = 'container';
area.className = 'area';

// -------- draw keyboard function ------
const drawKeyBoard = function(shift) {
  if (langRU && !shift) {
    container.innerHTML = '';
    container.insertAdjacentHTML(
      'afterbegin',
      `
        <div class="keyboard" id = "keyboard">
        <div class="row row1" id = "row">
            <div class="button" id ='192'>ё</div>
            <div class="button"  id ='49'>1</div>
            <div class="button"  id ='50'>2</div>
            <div class="button" id ='51'>3</div>
            <div class="button" id ='52'>4</div>
            <div class="button" id ='53'>5</div>
            <div class="button" id ='54'>6</div>
            <div class="button" id ='55'>7</div>
            <div class="button" id ='56'>8</div>
            <div class="button" id ='57'>9</div>
            <div class="button" id ='58'>0</div>
            <div class="button" id ='187'>-</div>
            <div class="button" id ='189'>=</div>
            <div class="button back" id = "8">backspace</div>
    </div>
        <div class="row row2" id = "row">
            <div class="button tab" id = "9">tab</div>
            <div class="button" id = "81">й</div>
            <div class="button" id = "87">ц</div>
            <div class="button" id = "69">у</div>
            <div class="button" id = "82">к</div>
            <div class="button" id = "84">е</div>
            <div class="button" id = "89">н</div>
            <div class="button" id = "85">г</div>
            <div class="button" id = "73">ш</div>
            <div class="button" id = "79">щ</div>
            <div class="button" id = "80">з</div>
            <div class="button" id = "219">х</div>
            <div class="button" id = "221">ъ</div>
            <div class="button" id = "220">&#92</div>
        </div>
        <div class="row row3">
            <div class="button caps" id = "20">caps lock</div>
            <div class="button" id = "65">ф</div>
            <div class="button" id = "83">ы</div>
            <div class="button" id = "68">в</div>
            <div class="button" id = "70">а</div>
            <div class="button" id = "71">п</div>
            <div class="button" id = "72">р</div>
            <div class="button" id = "74">о</div>
            <div class="button" id = "75">л</div>
            <div class="button" id = "76">д</div>
            <div class="button" id = "186">ж</div>
            <div class="button" id = "222">э</div>
            <div class="button enter" id = "13">enter</div>
        </div>
        <div class="row row4">
            <div class="button shift" id = "16">shift</div>
            <div class="button" id = "226">&#47</div>
            <div class="button" id = "90">я</div>
            <div class="button" id = "88">ч</div>
            <div class="button" id = "67">с</div>
            <div class="button" id = "86">м</div>
            <div class="button" id = "66">и</div>
            <div class="button" id = "78">т</div>
            <div class="button" id = "77">ь</div>
            <div class="button" id = "188">б</div>
            <div class="button" id = "190">ю</div>
            <div class="button" id = "191">.</div>
            <div class="button shift" id = "16">shift</div>
        </div>
        <div class="row row5">
            <div class="button ctrl" id = "17">ctrl</div>
            <div class="button win" id = "91">win</div>
            <div class="button alt" id = "18">alt</div>
            <div class="button space" id = "32"></div>
            <div class="button alt" id = "18">alt</div>
            <div class="button" id = "37">&#9756</div>
            <div class="buttons" id = "buttons">
                <div class="button" id = "38">&#9757</div>
                <div class="button" id = "40">&#9759</div>
            </div>
            <div class="button" id = "39">&#9758</div>
            <div class="button ctrl" id = "17">ctrl</div>
        </div>
        <div>`
    );
  } else if (langRU && shift) {
    container.innerHTML = '';
    container.insertAdjacentHTML(
      'afterbegin',
      `
        <div class="keyboard" id = "keyboard">
        <div class="row row1" id = "row">
            <div class="button" id ='192'>Ё</div>
            <div class="button" id ='49'>!</div>
            <div class="button"id ='50'>"</div>
            <div class="button" id ='51'>№</div>
            <div class="button" id ='52'>;</div>
            <div class="button" id ='53'>%</div>
            <div class="button" id ='54'>:</div>
            <div class="button" id ='55'>?</div>
            <div class="button" id ='56'>*</div>
            <div class="button" id ='57'>(</div>
            <div class="button" id ='58'>)</div>
            <div class="button" id ='187'>_</div>
            <div class="button" id ='189'>+</div>
            <div class="button back" id = "8">backspace</div>
    </div>
        <div class="row row2" id = "row">
            <div class="button tab" id = "9">tab</div>
            <div class="button" id = "81">Й</div>
            <div class="button" id = "87">Ц</div>
            <div class="button" id = "69">У</div>
            <div class="button" id = "82">К</div>
            <div class="button" id = "84">Е</div>
            <div class="button" id = "89">Н</div>
            <div class="button" id = "85">Г</div>
            <div class="button" id = "73">Ш</div>
            <div class="button" id = "79">Щ</div>
            <div class="button" id = "80">З</div>
            <div class="button" id = "219">Х</div>
            <div class="button" id = "221">Ъ</div>
            <div class="button" id = "220">&#92</div>
        </div>
        <div class="row row3">
            <div class="button caps" id = "20">caps lock</div>
            <div class="button" id = "65">Ф</div>
            <div class="button" id = "83">Ы</div>
            <div class="button" id = "68">В</div>
            <div class="button" id = "70">А</div>
            <div class="button" id = "71">П</div>
            <div class="button" id = "72">Р</div>
            <div class="button" id = "74">О</div>
            <div class="button" id = "75">Л</div>
            <div class="button" id = "76">Д</div>
            <div class="button" id = "186">Ж</div>
            <div class="button" id = "222">Э</div>
            <div class="button enter" id = "13">enter</div>
        </div>
        <div class="row row4">
            <div class="button shift" id = "16">shift</div>
            <div class="button" id = "226">&#47</div>
            <div class="button" id = "90">Я</div>
            <div class="button" id = "88">Ч</div>
            <div class="button" id = "67">С</div>
            <div class="button" id = "86">М</div>
            <div class="button" id = "66">И</div>
            <div class="button" id = "78">Т</div>
            <div class="button" id = "77">Ь</div>
            <div class="button" id = "188">Б</div>
            <div class="button" id = "190">Ю</div>
            <div class="button" id = "191">,</div>
            <div class="button shift" id = "16">shift</div>
        </div>
        <div class="row row5">
            <div class="button ctrl" id = "17">ctrl</div>
            <div class="button win" id = "91">win</div>
            <div class="button alt" id = "18">alt</div>
            <div class="button space" id = "32"></div>
            <div class="button alt" id = "18">alt</div>
            <div class="button" id = "37">&#9756</div>
            <div class="buttons" id = "buttons">
                <div class="button" id = "38">&#9757</div>
                <div class="button" id = "40">&#9759</div>
            </div>
            <div class="button" id = "39">&#9758</div>
            <div class="button ctrl" id = "17">ctrl</div>
        </div>
        <div>`
    );
  } else if (!langRU && shift) {
    container.innerHTML = '';
    container.insertAdjacentHTML(
      'afterbegin',
      `
            <div class="keyboard" id = "keyboard">
            <div class="row row1" id = "row">
                <div class="button"  id = "192">~</div>
                <div class="button"  id = "49">!</div>
                <div class="button" id = "50">@</div>
                <div class="button" id = "51">#</div>
                <div class="button" id = "52">$</div>
                <div class="button" id = "53">%</div>
                <div class="button" id = "54">^</div>
                <div class="button" id = "55">&</div>
                <div class="button" id = "56">*</div>
                <div class="button" id = "57">(</div>
                <div class="button" id = "48">)</div>
                <div class="button" id = "189">_</div>
                <div class="button" id = "187">+</div>
                <div class="button back" id = "8">backspace</div>
        </div>
            <div class="row row2" id = "row">
                <div class="button tab" id = "9">tab</div>
                <div class="button"id = "81">Q</div>
                <div class="button"id = "87">W</div>
                <div class="button"id = "69">E</div>
                <div class="button"id = "82">R</div>
                <div class="button"id = "84">T</div>
                <div class="button"id = "89">Y</div>
                <div class="button"id = "85">U</div>
                <div class="button"id = "73">I</div>
                <div class="button"id = "79">O</div>
                <div class="button"id = "80">P</div>
                <div class="button"id = "219">{</div>
                <div class="button"id = "221">}</div>
                <div class="button"id = "220">|</div>
            </div>
            <div class="row row3">
                <div class="button caps" id = "20">caps lock</div>
                <div class="button"id = "65">A</div>
                <div class="button"id = "83">S</div>
                <div class="button"id = "68">D</div>
                <div class="button"id = "70">F</div>
                <div class="button"id = "71">G</div>
                <div class="button"id = "72">H</div>
                <div class="button"id = "74">J</div>
                <div class="button"id = "75">K</div>
                <div class="button"id = "76">L</div>
                <div class="button"id = "186">:</div>
                <div class="button"id = "222">"</div>
                <div class="button enter" id = "13">enter</div>
            </div>
            <div class="row row4">
                <div class="button shift" id = "16">shift</div>
                <div class="button"id = "226">|</div>
                <div class="button"id = "90">Z</div>
                <div class="button"id = "88">X</div>
                <div class="button"id = "67">C</div>
                <div class="button"id = "86">V</div>
                <div class="button"id = "66">B</div>
                <div class="button"id = "78">N</div>
                <div class="button"id = "77">M</div>
                <div class="button"id = "188"><</div>
                <div class="button"id = "190">></div>
                <div class="button"id = "191">?</div>
                <div class="button shift" id = "16">shift</div>
            </div>
            <div class="row row5">
                <div class="button ctrl" id = "17">ctrl</div>
                <div class="button win" id = "91">win</div>
                <div class="button alt" id = "18">alt</div>
                <div class="button space" id = "32"></div>
                <div class="button alt" id = "18">alt</div>
                <div class="button" id = "37">&#9756</div>
                <div class="buttons">
                    <div class="button" id = "38">&#9757</div>
                    <div class="button"id = "40">&#9759</div>
                </div>
                <div class="button"id = "39">&#9758</div>
                <div class="button ctrl" id = "17">ctrl</div>
            </div>
            <div>`
    );
  } else {
    container.innerHTML = '';
    container.insertAdjacentHTML(
      'beforeend',
      `
            <div class="keyboard" id = "keyboard">
            <div class="row row1" id = "row">
                <div class="button" id = "192">\`</div>
                <div class="button"id = "49">1</div>
                <div class="button"id = "50">2</div>
                <div class="button"id = "51">3</div>
                <div class="button"id = "52">4</div>
                <div class="button"id = "53">5</div>
                <div class="button"id = "54">6</div>
                <div class="button"id = "55">7</div>
                <div class="button"id = "56">8</div>
                <div class="button"id = "57">9</div>
                <div class="button"id = "48">0</div>
                <div class="button"id = "189">-</div>
                <div class="button"id = "187">=</div>
                <div class="button back" id = "8">backspace</div>
        </div>
            <div class="row row2" id = "row">
                <div class="button tab" id = "9">tab</div>
                <div class="button" id = "81">q</div>
                <div class="button" id = "87">w</div>
                <div class="button" id = "69">e</div>
                <div class="button" id = "82">r</div>
                <div class="button" id = "84">t</div>
                <div class="button" id = "89">y</div>
                <div class="button" id = "85">u</div>
                <div class="button" id = "73">i</div>
                <div class="button" id = "79">o</div>
                <div class="button" id = "80">p</div>
                <div class="button" id = "219">[</div>
                <div class="button" id = "221">]</div>
                <div class="button" id = "220">&#92</div>
            </div>
            <div class="row row3">
                <div class="button caps" id = "20">caps lock</div>
                <div class="button"id = "65">a</div>
                <div class="button"id = "83">s</div>
                <div class="button"id = "68">d</div>
                <div class="button"id = "70">f</div>
                <div class="button"id = "71">g</div>
                <div class="button"id = "72">h</div>
                <div class="button"id = "74">j</div>
                <div class="button"id = "75">k</div>
                <div class="button"id = "76">l</div>
                <div class="button"id = "186">;</div>
                <div class="button"id = "222">'</div>
                <div class="button enter" id = "13">enter</div>
            </div>
            <div class="row row4">
                <div class="button shift" id = "16">shift</div>
                <div class="button" id = "226">&#47</div>
                <div class="button" id = "90">z</div>
                <div class="button" id = "88">x</div>
                <div class="button" id = "67">c</div>
                <div class="button" id = "86">v</div>
                <div class="button" id = "66">b</div>
                <div class="button" id = "78">n</div>
                <div class="button" id = "77">m</div>
                <div class="button" id = "188">,</div>
                <div class="button" id = "190">.</div>
                <div class="button" id = "191">&#47</div>
                <div class="button shift" id = "16">shift</div>
            </div>
            <div class="row row5">
                <div class="button ctrl" id = "17">ctrl</div>
                <div class="button win" id = "91">win</div>
                <div class="button alt" id = "18">alt</div>
                <div class="button space" id = "32"></div>
                <div class="button alt" id = "18">alt</div>
                <div class="button" id = "37">&#9756</div>
                <div class="buttons" id ="buttons">
                    <div class="button" id = "38">&#9757</div>
                    <div class="button" id = "40">&#9759</div>
                </div>
                <div class="button" id = "39">&#9758</div>
                <div class="button ctrl" id = "17">ctrl</div>
            </div>
            <div>`
    );
  }
  body.insertAdjacentElement('afterbegin', container);
  body.insertAdjacentElement('afterbegin', area);
};
drawKeyBoard(shift);

// ------ change language function --------
function changeLanguage(e) {
  let obj = document.event ? event : e;
  if (obj.altKey && obj.ctrlKey) {
    langRU = !langRU;
  }
  drawKeyBoard(shift);
  localStorage.setItem('lang', langRU);
  text_area.focus();
}

// ------ caps lock function -------
function caps(event) {
  if (event.getModifierState('CapsLock')) {
    let x = document.querySelector('#keyboard').children;
    Array.prototype.forEach.call(x, elem => {
      Array.prototype.map.call(elem.children, el => {
        if (el.innerHTML.length === 1 && el.className === 'button') {
          return (el.innerHTML = el.innerHTML.toUpperCase());
        }
      });
    });
  }
}

const keys = {};

// ------ event on pressing the button on keyboard ---------

document.addEventListener('keydown', function(event) {
  changeLanguage(event);
  caps(event);
  keys[event.keyCode] = true;
  if (event.getModifierState('Shift')) {
    drawKeyBoard(event.getModifierState('Shift'));
  }
  for (var property in keys) {
    if (keys[property] == true) {
      let x = document.querySelector('#keyboard').children;
      Array.prototype.forEach.call(x, elem => {
        Array.prototype.map.call(elem.children, el => {
          if (el.id == property) {
            console.log(el.id);
            if (el.innerHTML.length === 1) {
              text_area.value += el.innerHTML;
            } else if (el.id === '32') {
              text_area.value += ' ';
            } else if (el.id === '9') {
              text_area.value += '    ';
            } else if (el.id === '13') {
              text_area.value += '\n';
            } else if (el.id === '8') {
              text_area.value = text_area.value.slice(
                0,
                text_area.value.length - 2
              );
            }
            return el.classList.add('buttonCh');
          } else if (el.id === 'buttons') {
            Array.prototype.map.call(el.children, e => {
              if (e.id === property) {
                text_area.value += e.innerHTML;
                return e.classList.add('buttonCh');
              }
            });
          }
        });
      });
    }
  }
});

document.addEventListener('keyup', function(event) {
  keys[event.keyCode] = false;
  if (event.key === 'Shift') {
    drawKeyBoard(shift);
  }
  for (var property in keys) {
    //  debugger;
    if (keys[property] === false) {
      let y = document.querySelector('#keyboard').children;
      Array.prototype.forEach.call(y, elem => {
        Array.prototype.map.call(elem.children, el => {
          if (el.id == property) {
            event.preventDefault();
            return el.classList.remove('buttonCh');
          } else if (el.id === 'buttons') {
            Array.prototype.map.call(el.children, e => {
              if (e.id === property) {
                return e.classList.remove('buttonCh');
              }
            });
          }
        });
      });
    }
  }
});

/// ------ preventing default behaviour of keyboard --------

text_area.addEventListener('keydown', function(e) {
  e.preventDefault();
});

// ------ event on clicking screen keyboard -----------

document.querySelector('.container').addEventListener('click', event => {
  let button = event.target;

  if (
    button.innerHTML !== 'tab' &&
    button.innerHTML !== 'caps lock' &&
    button.innerHTML !== 'shift' &&
    button.innerHTML !== 'ctrl' &&
    button.innerHTML !== 'alt' &&
    button.innerHTML !== 'win' &&
    button.innerHTML !== '' &&
    button.innerHTML !== 'enter' &&
    button.innerHTML !== 'backspace' &&
    button.classList[0] === 'button'
  ) {
    text_area.value += button.innerHTML;
  } else if (button.innerHTML === 'backspace') {
    text_area.value = text_area.value.slice(0, text_area.value.length - 1);
  } else if (button.innerHTML === '') {
    text_area.value += ' ';
  } else if (button.innerHTML === 'tab') {
    text_area.value += '    ';
  } else if (button.innerHTML === 'enter') {
    text_area.value += '\n';
  }
});

document.querySelector('.container').addEventListener('mousedown', event => {
  let button = event.target;
  if (button.classList[0] == 'button') {
    button.classList.add('buttonCh');
    button.addEventListener('mouseup', () => {
      button.classList.remove('buttonCh');
    });
  }
});
