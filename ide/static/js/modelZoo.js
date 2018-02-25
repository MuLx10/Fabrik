import React from 'react';
import ModelElement from './modelElement';

class ModelZoo extends React.Component {

  constructor() {
      super();
      this.state = {
        toDisplay:5,
        toAddPerClick:3,
        Recognition:{ 
                      currentPage:0,
                      models:[
                              ["caffe","lenet","MNIST LeNet"],
                              ["caffe","cifar10_full","Cifar10 CNN"],
                              ["caffe","GoogleNet","GoogLeNet"],
                              ["keras","v3","Inception V3"],
                              ["caffe","alexnet","AlexNet"],
                              ["caffe","All_CNN","All CNN"],
                              ["caffe","vgg16","VGG 16"],
                              ["caffe","densenet","DenseNet"],
                              ["caffe","resnet101","ResNet 101"],
                              ["caffe","Squeezenet","Squeezenet"],
                              ["caffe","SENet","SENet"],
                              ["keras","imdb_cnn_lstm","IMDB CNN LSTM"]
                            ] 
                  },
        Detection:{ 
                    currentPage:0,
                    models: [
                              ["caffe","yolo_net","YOLONet"],
                              ["caffe","vanilla","Vanilla CNN"],
                              ["caffe","fcn","FCN32 Pascal"],
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
        var task = this.state.Recognition
        var used = task.currentPage*this.state.toAddPerClick;
        if(used<=task.models.length)
        {
          task.currentPage = task.currentPage+1
          this.setState({
            Recognition: task
          });
        }
        else
         {
          task.currentPage = 0
          this.setState({
            Recognition:task
          });
        } 
    }
    if (id == "Detection")
    {
        task = this.state.Detection;
        used = task.currentPage*this.state.toAddPerClick ;
        if(used<=task.models.length)
        {
          task.currentPage = task.currentPage+1;
          this.setState({
            Detection: task
          });
        }
        else
         {
          task.currentPage = 0;
          this.setState({
            Detection: task
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
            <button id="Recognition"  onClick={this.handleClick} >
              <span className="glyphicon  glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
            </button>
          </div>

          <div className="zoo-modal-model">
            <h3 className="zoo-modal-text">Detection</h3>
              {renderDetection}
              <button id="Detection" onClick={this.handleClick} >
                <span className="glyphicon  glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
              </button>
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
