import React from 'react';
import ModelElement from './modelElement';

class ModelZoo extends React.Component {

  constructor() {
      super();
      this.state = {
        toDisplay:3,
        toAddPerClick:5,
        Recognition:{ 
                      currentPage:0,
                      models:[
                              ["caffe","lenet","MNIST LeNet"],
                              ["caffe","cifar10_full","Cifar10 CNN"],
                              ["caffe","alexnet","AlexNet"],
                              ["caffe","All_CNN","All CNN"],
                              ["caffe","vgg16","VGG 16"],
                              ["caffe","densenet","DenseNet"],
                              ["caffe","GoogleNet","GoogLeNet"],
                              ["caffe","resnet101","ResNet 101"],
                              ["keras","v3","Inception V3"],
                              ["caffe","Squeezenet","Squeezenet"],
                              ["caffe","SENet","SENet"],
                              ["keras","imdb_cnn_lstm","IMDB CNN LSTM"]
                            ] 
                  },
        Detection:{ 
                    currentPage:0,
                    models: [
                              ["caffe","vanilla","Vanilla CNN"],
                              ["caffe","fcn","FCN32 Pascal"],
                              ["caffe","yolo_net","YOLONet"],
                              ["caffe","HED","HED"] 
                            ]
                  }
      };
      this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick(event){
    var id = event.target.id
    if (id == "Recognition")
    {
        var recognition = this.state.Recognition
        var used = recognition.currentPage*this.state.toAddPerClick + this.state.toDisplay
        if(used<=recognition.length)
        {
          this.setState({
            currentPage: this.state.Recognition.currentPage+1
          });
        }
        else
         {
          this.setState({
            currentPage: 0
          });
        } 
    }
    if (id == "Detection")
    {
        var detection = this.state.Detection
        used = detection.currentPage*this.state.toAddPerClick + this.state.toDisplay
        if(used<=detection.length)
        {
          this.setState({
            currentPage: this.state.Detection.currentPage+1
          });
        }
        else
         {
          this.setState({
            currentPage: 0
          });
        } 
    }    
  }

  render() {

    const startIndex = 0;

    const recognition = this.state.Recognition.models;
    const detection = this.state.Detection.models;

    const finalRecognitionIndex = this.state.toDisplay + this.state.Recognition.currentPage*this.state.toAddPerClick;
    const slicedRecogntion = recognition.slice(startIndex, finalRecognitionIndex);
    const renderRecognition = slicedRecogntion.map((recognition) => {
      return (  
        <div>
          <ModelElement importNet = {this.props.importNet} framework =
                      {recognition[0]} id = {recognition[1]}> {recognition[2]} </ModelElement>
          <br/>
        </div>
        );
    });

    const finalDetectionIndex = this.state.toDisplay + this.state.Detection.currentPage*this.state.toAddPerClick;
    const slicedDetection = detection.slice(startIndex, finalDetectionIndex);
    const renderDetection = slicedDetection.map((detection) => {
      return (  
        <div>
          <ModelElement importNet = {this.props.importNet} framework =
                      {detection[0]} id = {detection[1]}> {detection[2]} </ModelElement>
          <br/>
        </div>
        );
    })


    return (
      <div className="zoo-modal">
        <div className="centered-zoo-modal">
          <div className="zoo-modal-model">
            <h3 className="zoo-modal-text">Recognition</h3>
            {renderRecognition}
          </div>

          <div className="zoo-modal-model">
            <h3 className="zoo-modal-text">Detection</h3>
              {renderDetection}
            <h3 className="zoo-modal-text">Retrieval</h3>
              <ModelElement importNet={this.props.importNet} framework="caffe" id="siamese_mnist">MNIST Siamese</ModelElement>
          </div>
          <div className="zoo-modal-model">
            <h3 className="zoo-modal-text">Seq2Seq</h3>
              <ModelElement importNet={this.props.importNet} framework="keras" id="textGeneration">Text Generation</ModelElement>
              <br/>
              <ModelElement importNet={this.props.importNet} framework="keras" id="seq2seq_lang">Seq2Seq Translation</ModelElement>
              <br/>
              <ModelElement importNet={this.props.importNet} framework="caffe" id="pix2pix">Pix2Pix</ModelElement>
          </div>
          <div className="zoo-modal-model">
            <h3 className="zoo-modal-text">Caption</h3>
            <ModelElement importNet={this.props.importNet} framework="caffe" id="CoCo_Caption">CoCo Caption</ModelElement>
            <h3 className="zoo-modal-text">Segmentation</h3>
            <ModelElement importNet={this.props.importNet} framework="caffe" id="fcn2">Semantic Segmentation</ModelElement>
            <br/>
            <ModelElement importNet={this.props.importNet} framework="keras" id="ZF_UNET_224">UNET</ModelElement>
          </div>
          <div className="zoo-modal-model">
            <h3 className="zoo-modal-text">VQA</h3>
            <ModelElement importNet={this.props.importNet} framework="keras" id="VQA">VQA</ModelElement>
            <br/>
            <ModelElement importNet={this.props.importNet} framework="keras" id="VQA2">VQA2</ModelElement>
            <br/>
            <ModelElement importNet={this.props.importNet} framework="caffe" id="mlpVQA">VQS</ModelElement>
          </div>
        </div>
      </div>
    );
  }
}

ModelZoo.propTypes = {
  importNet: React.PropTypes.func
};

export default ModelZoo;
