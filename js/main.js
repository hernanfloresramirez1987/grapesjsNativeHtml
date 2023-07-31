  const { createApp } = Vue
  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
  
const editor = grapesjs.init({
  height: '400px',
  showOffsets: 1,
  noticeOnUnload: 0,
  //storageManager: { autoload: 0 },
  container: '#gjs',
  fromElement: true,
  showDevices: false,
  plugins: ['bootstrap'],
  pluginsOpts: {
      'bootstrap': {
          blocks: {},
          blockCategories: {},
          labels: {},
          gridDevicesPanel: true,
          formPredefinedActions: [
              {name: 'Contact', value: '/contact'},
              {name: 'landing', value: '/landing'},
          ]
      }
  },
  canvas: {
      styles: [
          'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css'
      ],
      scripts: [
          'https://code.jquery.com/jquery-3.5.1.slim.min.js',
          'https://unpkg.com/@popperjs/core@2',
          'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js'
      ],
  },
  blockManager: {
  //xappendTo: '#blocks',
  blocks: [
    /*{
      //id: 'section', // id is mandatory
      label: '<b>Section</b>', // You can use HTML/SVG inside labels
      category: 'Basic',
      attributes: { class:'gjs-block-section' },
      content: `<section>
                  <h1>This is a simple title</h1>
                  <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
                </section>`,
    }, {
      //id: 'text',
      label: 'Text',
      category: 'Basic',
      content: '<div data-gjs-type="text">Insert your text here</div>',
    },*/ {
      //id: 'table_2',
      label: 'Columns I',
      category: 'Columnas',
      attributes: { class: 'fa fa-table' },
      type: 'cell',
      tagName: 'td',
      removable: true, // Can't remove it
      draggable: ['tr'], // Can't move it
      copyable: true, // Disable copy/past
      dropable: true,
      // style: { background: 'red'},
      // attributes: { title: 'here' },
      content:`
        <div class="row">
          <div class="col-xs-12 col-sm-12">Producto</div>
        </div>`
    }, {
      //id: 'table_2',
      label: 'Columns II',
      category: 'Columnas',
      attributes: { class: 'fa fa-table' },
      type: 'cell',
      tagName: 'td',
      removable: true, // Can't remove it
      draggable: ['tr'], // Can't move it
      copyable: true, // Disable copy/past
      dropable: true,
      // style: { background: 'red'},
      // attributes: { title: 'here' },
      content:`
        <div class="row">
          <div class="col-xs-6 col-sm-6"><div>.col-xs-6</div></div>
          <div class="col-xs-6 col-sm-6"><div>.col-xs-6</div></div>

        </div>`
    }, {
      //id: 'table_3',
      label: 'Tabla III',
      category: 'Tablas',
      attributes: { class: 'fa fa-table' },
      type: 'cell',
      tagName: 'td',
      removable: true, // Can't remove it
      draggable: true,
      copyable: true, // Disable copy/past
      dropable: true,
      // style: { background: 'red'},
      // attributes: { title: 'here' },
      content:`
        <div class="row">
          <div class="col-xs-4 col-sm-4">.col-xs-4</div>
          <div class="col-xs-4 col-sm-4">.col-xs-4</div>
          <div class="col-xs-4 col-sm-4">.col-xs-4</div>
        </div>`
    }, {
      //id: 'table_4',
      label: 'Tabla IV',
      category: 'Tablas',
      attributes: { class: 'fa fa-table' },
      type: 'cell',
      tagName: 'td',
      removable: true, // Can't remove it
      draggable: ['tr'], // Can't move it
      copyable: true, // Disable copy/past
      dropable: true,
      // style: { background: 'red'},
      // attributes: { title: 'here' },
      content:`
        <div class="row">
          <div class="col-xs-3 col-sm-3">.col-xs-3</div>
          <div class="col-xs-3 col-sm-3">.col-xs-3</div>
          <div class="col-xs-3 col-sm-3">.col-xs-3</div>
          <div class="col-xs-3 col-sm-3">.col-xs-3</div>
        </div>`
    }, {
      //id: 'table_4',
      label: 'Tabla 9-3',
      category: 'Tablas',
      attributes: { class: 'fa fa-table' },
      type: 'cell',
      tagName: 'td',
      removable: true, // Can't remove it
      draggable: ['tr'], // Can't move it
      copyable: true, // Disable copy/past
      dropable: true,
      // style: { background: 'red'},
      // attributes: { title: 'here' },
      content:`
        <div class="row">
          <div class="col-xs-9 col-sm-9">.col-xs-9</div>
          <div class="col-xs-3 col-sm-3">.col-xs-3</div>
        </div>`
    },{
      //id: 'table_4',
      label: 'Tabla 7-5',
      category: 'Tablas',
      attributes: { class: 'fa fa-table' },
      type: 'cell',
      tagName: 'td',
      removable: true, // Can't remove it
      draggable: ['tr'], // Can't move it
      copyable: true, // Disable copy/past
      dropable: true,
      // style: { background: 'red'},
      // attributes: { title: 'here' },
      content:`
        <div class="row">
          <div class="col-xs-7 col-sm-7">.col-xs-7</div>
          <div class="col-xs-5 col-sm-5">.col-xs-5</div>
        </div>`
    }, {
      //id: 'table_4',
      label: 'Tabla 10-2',
      category: 'Tablas',
      attributes: { class: 'fa fa-table' },
      type: 'cell',
      tagName: 'td',
      removable: true, // Can't remove it
      draggable: ['tr'], // Can't move it
      copyable: true, // Disable copy/past
      dropable: true,
      // style: { background: 'red'},
      // attributes: { title: 'here' },
      content:`
        <div class="row">
          <div class="col-xs-10 col-sm-10">.col-xs-10</div>
          <div class="col-xs-2 col-sm-2">.col-xs-2</div>
        </div>`
    }, {
      id: 'card',
      label: 'Card',
      category: 'cards',
      attributes: { class: 'bs-glyphicons-list' },
      select: false,
      content: { type: 'cell' },
      // This triggers `active` event on dropped components and the `image`
      // reacts by opening the AssetManager
      activate: true,
      
      type: 'cell',
      tagName: 'td',
      removable: true, // Can't remove it
      draggable: ['tr'], // Can't move it
      copyable: true, // Disable copy/past
      dropable: true,
      // style: { background: 'red'},
      // attributes: { title: 'here' },
      content:`
      <div class="row">
        <p>Este es un parrafo de muestra</p>
      </div>`
    }, {
      //id: 'table_4',
      label: 'Tabla IV',
      category: 'Tablas',
      attributes: { class: 'fa fa-table' },
      type: 'cell',
      tagName: 'td',
      removable: true, // Can't remove it
      draggable: ['tr'], // Can't move it
      copyable: true, // Disable copy/past
      dropable: true,
      // style: { background: 'red'},
      // attributes: { title: 'here' },
      content:`<h1>Lorem in setup</h1>`
    }, {
      id: 'h1',
      label: 'H1',
      category: 'texts',
      select: false,
      content:`<h1>Lorem in setup</h1>`,
      // This triggers `active` event on dropped components and the `image`
      // reacts by opening the AssetManager
      activate: true,
    }, {
      id: 'h2',
      label: 'H2',
      category: 'texts',
      select: false,
      content:`<h2>Lorem in setup</h2>`,
      // This triggers `active` event on dropped components and the `image`
      // reacts by opening the AssetManager
      activate: true,
    }, {
      id: 'h3',
      label: 'H3',
      category: 'texts',
      select: false,
      content:`<h3>Lorem in setup</h3>`,
      // This triggers `active` event on dropped components and the `image`
      // reacts by opening the AssetManager
      activate: true,
    }, {
      id: 'p',
      label: 'p',
      category: 'texts',
      select: false,
      content:`<p>Lorem in setup</p>`,
      // This triggers `active` event on dropped components and the `image`
      // reacts by opening the AssetManager
      activate: true,
    }, {
      //id: 'table_4',
      label: 'Gradient',
      category: 'Circles',
      attributes: { class: 'fa fa-circle' },
      type: 'cell',
      tagName: 'td',
      removable: true, // Can't remove it
      draggable: ['tr'], // Can't move it
      copyable: true, // Disable copy/past
      dropable: true,
      // style: { background: 'red'},
      // attributes: { title: 'here' },
      content:`
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>`
    }
  ]
} 
});

var blockManager = editor.BlockManager;
window.editor = editor;