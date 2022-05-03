import React from 'react';
import Input from '../../common/components/Input/Input';
// import Images from '../../common/images';

const NewPostForm = ({seletedHandler, sendHandlerImg,handlerInputChange,formData}) => {

  return (
    <> 
        <div className="row post-container">         
                <div className='post-title'>
                    <p className='m-0'>CREATE A NEW POST</p>
                </div>


            <div className="newPostContainerGrid">

                <div className="newPostContainer">
                    <div className="newPostInputContainer">
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">CATEGORY</label>
                                <select 
                                    name="category" 
                                    value={formData.category} 
                                    onChange={handlerInputChange}
                                    className="form-select"
                                    id="inputGroupSelect01"
                                >
                                    <option defaultValue={true}>Choose a Category</option>
                                    <option className="option-txt" value="Main Post">Main Post</option>
                                    <option className="option-txt" value="Featured Post">Featured Post</option>
                                    {/* <option className="option-txt" value="Topic of Interest">Topic of Interest</option> */}
                                </select>
                        </div>

                        <div className="pb-4">
                            <Input
                                id="titleinput"
                                name="title"
                                type="text"
                                placeholder="Add title here"
                                classInput="inputTitle"
                                // maxLength="16"
                                // minLength="4"
                                onChange={handlerInputChange}
                                value={formData.title}
                            /> 
                        </div>  

                        {/* <div className="">
                            <input
                                id="fileinput"
                                name="content"
                                type="file"
                                onChange={seletedHandler}
                                className='inputAddFile'
                                accept='.jpg, .jpeg, .jfif, .png'
                            /> 
                        </div> */}

                        <div className="pb-4">
                            <Input
                                id="authorinput"
                                name="author"
                                type="text"
                                placeholder="Add an author"
                                classInput="inputTitle"
                                // maxLength="16"
                                // minLength="4"
                                onChange={handlerInputChange}
                                value={formData.author}
                            /> 
                        </div>   

                        <div className="mb-5">
                            <textarea
                                id="descpinput"
                                name='description'
                                className='txtarea'
                                placeholder='Add text'
                                onChange={handlerInputChange}
                                value={formData.description}
                            />
                        </div> 
                        <div>
                            <button className="btn-publish" name="btn-publish" type="submit" onClick={sendHandlerImg}>Publish</button>
                        </div>
                    </div>
                </div> 

                <div className="newPostContainer">

                    {/* <div className="newPostToolsContainer">
                        <div className="newPostImgCont">
                            <figure>
                                <p>Add Images</p>
                                <img className='newPostImg' src={Images.img} alt=''/>
                            </figure>
                            <figure>
                            <p>Add PDF</p>
                                <img className='newPostImg' src={Images.pdf} alt=''/>
                            </figure>
                            <figure>
                                <p>Add Video</p>
                                <img className='newPostImg' src={Images.video} alt=''/>
                            </figure>
                            <figure>
                            <p>Add Link</p>
                                <img className='newPostImg' src={Images.link} alt=''/>
                            </figure>
                            
                        </div>
                    </div> */}
                    
                    <div className="newPostToolsContainer">
                        <p className='area-txt'>Drag and drop an image or select to add an image</p>
                        <div className="area">
                            <input
                                id="fileinput"
                                name="content"
                                type="file"
                                onChange={seletedHandler}
                                // className='inputAddFile'
                                accept='.jpg, .jpeg, .jfif, .png'
                            /> 
                        </div>
                    </div>
                    
                </div> 

            </div>

        </div>
    </>
)}

export default NewPostForm