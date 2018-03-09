import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import ModelElement from './modelElement';

class ZooSearch extends React.Component {

  constructor() {
      super();
      this.state = {
        open:1,
        text:"Back",
        searchText:"Frequently Used",
        searchResult:[
                      ["keras","v3","Inception V3"],
                      ["caffe","GoogleNet","GoogLeNet"],
                      ["caffe","alexnet","AlexNet"],
                      ["caffe","yolo_net","YOLONet"],
                      ["keras","textGeneration","Text Generation"]
                     ],
        Recognition:{ 
                      toDisplay:6,
                      models:[
                              ["keras","v3","Inception V3"],
                              ["caffe","GoogleNet","GoogLeNet"],
                              ["caffe","alexnet","AlexNet"],
                              ["caffe","vgg16","VGG 16"],
                              ["caffe","densenet","DenseNet"],
                              ["caffe","lenet","MNIST LeNet"],
                              ["caffe","cifar10_full","Cifar10 CNN"],
                              ["keras","imdb_cnn_lstm","IMDB CNN LSTM"],
                              ["caffe","All_CNN","All CNN"],
                              ["caffe","Caffenet","Caffenet"],
                              ["caffe","speech_net","Speech Net"],
                              ["caffe","CNDS","CNDS"],
                              ["caffe","Gender","Gender"],
                              ["caffe","Age","Age"],
                              ["caffe","network_in_network","Network in Network"],
                              ["caffe","resnet101","ResNet 101"],
                              ["caffe","Squeezenet","Squeezenet"],
                              ["caffe","SENet","SENet"]
                            ] 
                  },
        Detection:{ 
                    toDisplay:3,
                    models: [
                              ["caffe","yolo_net","YOLONet"],
                              ["caffe","vanilla","Vanilla CNN"],
                              ["caffe","R-CNN","R-CNN"],
                              ["caffe","fcn","FCN32 Pascal"],
                              ["caffe","48Net","48Net"]
                            ]
                  },
        Seq2Seq:{
                  toDisplay:3,
                  models:[
                          ["keras","textGeneration","Text Generation"],
                          ["keras","seq2seq_lang","Seq2Seq Translation"],
                          ["caffe","pix2pix","Pix2Pix"]
                        ]
                },
        VQA:{
                  toDisplay:3,
                  models:[
                            ["keras", "VQA", "VQA"],
                            ["keras", "VQA2", "VQA2"],
                            ["caffe", "mlpVQA", "VQS"]
                          ]
                },
        Segmentation:{
                    toDisplay:2,
                    models:[
                              ["caffe","fcn2","Semantic Segmentation"],
                              ["keras","ZF_UNET_224","UNET"]
                            ]
                },
      Retrieval:{
                    toDisplay:1,
                    models:[
                              ["caffe","siamese_mnist","MNIST Siamese"]
                           ]

              },
      Caption:{
                    toDisplay:1,
                    models:[
                            ["caffe","CoCo_Caption","CoCo Caption"]
                          ]
              }
      };

  }

  handleSearch(){
    var bar = ReactDOM.findDOMNode(this.refs.searchBar);
    var word = bar.value;
    var result = [];

    this.setState({searchText:"Search Result"});

    if(word ==""){

      var allRecognition = this.state.Recognition.models;
      for(var i=0; i<allRecognition.length; i++){       
          result.push(allRecognition[i]);
      }

      var allDetection = this.state.Detection.models;
      for(i=0; i<allDetection.length; i++){
          result.push(allDetection[i]);
      }

      var allSeq2Seq = this.state.Seq2Seq.models;
      for(i=0; i<allSeq2Seq.length; i++){
          result.push(allSeq2Seq[i]);
      }

      var allVQA = this.state.VQA.models;
      for(i=0; i<allVQA.length; i++){
         result.push(allVQA[i]);
      }

      var allSegmentation = this.state.Segmentation.models;
      for(i=0; i<allSegmentation.length; i++){
         result.push(allSegmentation[i]);
      }

      var allRetrieval = this.state.Retrieval.models;
      for(i=0; i<allRetrieval.length; i++){
          result.push(allRetrieval[i]);
      }

      var allCaption = this.state.Caption.models;
      for(i=0; i<allCaption.length; i++){
          result.push(allCaption[i]);
      }
      this.setState({searchResult:result});
    }
    else{
      word = word.toLowerCase();
      allRecognition = this.state.Recognition.models;
      for(i=0; i<allRecognition.length; i++){
        if(allRecognition[i][2].toLowerCase().indexOf(word)!=-1){
          result.push(allRecognition[i]);
        }
      }

      allDetection = this.state.Detection.models;
      for(i=0; i<allDetection.length; i++){
        if(allDetection[i][2].toLowerCase().indexOf(word)!=-1){
          result.push(allDetection[i]);
        }
      }

      allSeq2Seq = this.state.Seq2Seq.models;
      for(i=0; i<allSeq2Seq.length; i++){
        if(allSeq2Seq[i][2].toLowerCase().indexOf(word)!=-1){
          result.push(allSeq2Seq[i]);
        }
      }

      allVQA = this.state.VQA.models;
      for(i=0; i<allVQA.length; i++){
       if(allVQA[i][2].toLowerCase().indexOf(word)!=-1){
         result.push(allVQA[i]);
       }
      }

      allSegmentation = this.state.Segmentation.models;
      for(i=0; i<allSegmentation.length; i++){
       if(allSegmentation[i][2].toLowerCase().indexOf(word)!=-1){
         result.push(allSegmentation[i]);
        }
      }

      allRetrieval = this.state.Retrieval.models;
      for(i=0; i<allRetrieval.length; i++){
        if(allRetrieval[i][2].toLowerCase().indexOf(word)!=-1){
          result.push(allRetrieval[i]);
        }
      }

      allCaption = this.state.Caption.models;
      for(i=0; i<allCaption.length; i++){
        if(allCaption[i][2].toLowerCase().indexOf(word)!=-1){
          result.push(allCaption[i]);
        }
      }
    }
    
    this.setState({searchResult:result});
  }

  render() {
    var category = this.state.searchResult;
    var renderSearch = [];
    for(var i=0; i<category.length; i++){
      renderSearch.push(
        
          <ModelElement importNet = {this.props.importNet} framework = {category[i][0]} id = {category[i][1]}> 
              <Card imgSrc="https://facebook.github.io/react-native/docs/assets/favicon.png"
                    name = {category[i][2]}>
              </Card>
          </ModelElement>
        
        );
    }

    return (
    <div className="zoo-modal">
        <div className="centered-zoo-modal">
          <div className="zoo-modal-model">
            <h1 className="zoo-modal-text">Load From Zoo</h1>
            <input className="zoo-textbox-input" ref='searchBar' onChange={this.handleSearch.bind(this)} type="text" placeholder="Search..." />
            <h3 className="zoo-modal-text">{this.state.searchText}</h3>
            {renderSearch}
          </div> 

          <button className="import-textbox-button btn btn-default col-md-2 col-md-offset-5"  
              id="change" onClick={() => this.props.zooModal()}>Back
            &nbsp;<span className="glyphicon  glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          </button> 
        </div>
      </div>
    );
  }
}


ZooSearch.propTypes = {
  importNet: React.PropTypes.func,
  zooModal: React.PropTypes.func
};

export default ZooSearch;
