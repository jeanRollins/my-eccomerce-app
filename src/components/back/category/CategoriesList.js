import React, { useRef, useState } from 'react'
import { Checkbox, FormControlLabel, Grid, IconButton } from '@material-ui/core'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { CategoryAdd, CategoryGetByfield } from '../../../libs/Category'
import { useAlert } from '../../../hooks/useAlert';

export const CategoriesList = ({ categories, checks, showAdd = false, fetch, showChecks = false }) => {

    const categoriesRef = useRef({});
    const categoriesInputRef = useRef({});

    const { AlertSnackBar, handleShowAlert } = useAlert();
    const [text, setText] = useState('');

    const handleToggleRef = id => {
        setText('');
        const categoriesKeys = Object.keys(categoriesRef.current);

        if (id === undefined) {

            categoriesKeys.forEach(c => categoriesRef.current[c].classList.add('d-none'));
            return;
        }

        const catRef = categoriesRef.current[id];

        if (catRef.classList.contains('d-none')) {
            categoriesKeys.forEach(c => categoriesRef.current[c].classList.add('d-none'));
        }

        catRef.classList.toggle('d-none');
        catRef.firstElementChild.focus();
    }

    const handleAddCategory = async parent => {

        try {
            const form = { name: text, parent };

            const { action, data } = await CategoryAdd(form);

            if (!action) {
                handleShowAlert("Hubo un problema al agregar categoría, intente más tarde.");
                return;
            }

            fetch();
            handleToggleRef();
            handleShowAlert(`Categoría ${data.name} agregado`, "success");
            setText('');
        }
        catch (error) {
            handleShowAlert("Hubo un problema al agregar categoría , intente más tarde.");
        }
    }

    const handleShowSetCategory = async id => {

        const element = categoriesRef.current[id];

        if (element === undefined) return false;


        console.log('id ::: ', id);
    }

    return (
        <>
            <AlertSnackBar />

            { categories.map(c => (

                <Grid
                    item
                    xs={3}
                    key={c.id}
                    className="p-x-4"
                >
                    <FormControlLabel
                        className=""
                        onDoubleClick={e => handleShowSetCategory(c.id)}
                        control={(
                            <>
                                { (showChecks) && (
                                    <Checkbox
                                        color="primary"
                                        value={c.id}
                                        name="categories[]"
                                        defaultChecked={checks.includes(c.id) ? true : false}
                                    />
                                )}
                            </>

                        )}
                        label={c.name}
                    />
                    { (showAdd) && (
                        <>
                            <div
                                className="d-none"
                                ref={el => categoriesInputRef.current[c.id] = el}
                            >
                                <input
                                    type="text"
                                    className="input-sm w-50"
                                />
                                <IconButton
                                    onClick={e => handleAddCategory(c.id)}
                                >
                                    <CheckOutlinedIcon fontSize="small" />
                                </IconButton>
                                <IconButton
                                    onClick={e => handleToggleRef(c.id)}
                                >
                                    <CloseOutlinedIcon fontSize="small" />
                                </IconButton>
                            </div>

                            <div 
                                className = "d-inline"
                            >
                                <IconButton
                                    onClick={e => handleToggleRef(c.id)}
                                >
                                    <AddOutlinedIcon fontSize="small" />
                                </IconButton>
                                <div
                                    className=" d-none"
                                    ref={el => categoriesRef.current[c.id] = el}
                                    data-name={c.name}
                                >
                                    <input
                                        type="text"
                                        className="input-sm w-60"
                                        onKeyPress={e => e.code === 'Enter' && handleAddCategory(c.id)}
                                        value={text}
                                        onChange={e => setText(e.target.value)}
                                    />
                                    <IconButton
                                        aria-label="delete"
                                        className=""
                                        onClick={e => handleAddCategory(c.id)}
                                    >
                                        <CheckOutlinedIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton
                                        aria-label="delete"
                                        className=""
                                        onClick={e => handleToggleRef(c.id)}
                                    >
                                        <CloseOutlinedIcon fontSize="small" />
                                    </IconButton>
                                </div>
                            </div>
                          
                        </>
                    )}

                    { c.data.map(cc => (
                        <div key={cc.id} >

                            <FormControlLabel
                                className=""
                                style={{ marginLeft: '14px' }}
                                control={(
                                    <>
                                        { (showChecks) && (
                                            <Checkbox
                                                color="primary"
                                                value={cc.id}
                                                name="categories[]"
                                                defaultChecked={checks.includes(cc.id) ? true : false}
                                            />
                                        )}
                                    </>

                                )}
                                label={cc.name}
                            />


                            { (showAdd) && (
                                <  >

                                    <IconButton
                                        onClick={e => handleToggleRef(cc.id)}
                                    >
                                        <AddOutlinedIcon fontSize="small" />
                                    </IconButton>
                                    <div
                                        className="d-none"
                                        ref={el => categoriesRef.current[cc.id] = el}
                                    >
                                        <input
                                            type="text"
                                            className="input-sm w-50"
                                            style={{ marginLeft: '20px' }}
                                            onKeyPress={e => e.code === 'Enter' && handleAddCategory(cc.id)}
                                            value={text}
                                            onChange={e => setText(e.target.value)}
                                        />
                                        <IconButton
                                            onClick={e => handleAddCategory(cc.id)}
                                        >
                                            <CheckOutlinedIcon fontSize="small" />
                                        </IconButton>
                                        <IconButton
                                            onClick={e => handleToggleRef(cc.id)}
                                        >
                                            <CloseOutlinedIcon fontSize="small" />
                                        </IconButton>
                                    </div>


                                </>
                            )}

                            { cc.data.map(ccc => {

                                return (
                                    <div
                                        key={ccc.id}
                                    >
                                        <FormControlLabel
                                            key={ccc.id}
                                            style={{ marginLeft: '28px' }}
                                            control={
                                                (
                                                    <>
                                                        { (showChecks) && (
                                                            <Checkbox
                                                                color="primary"
                                                                value={ccc.id}
                                                                name="categories[]"
                                                                defaultChecked={checks.includes(ccc.id) ? true : false}
                                                            />
                                                        )}
                                                    </>

                                                )}
                                            label={ccc.name}
                                        />

                                        { (showAdd) && (
                                            <>
                                                <IconButton
                                                    onClick={e => handleToggleRef(ccc.id)}
                                                >
                                                    <AddOutlinedIcon fontSize="small" />
                                                </IconButton>
                                                <div
                                                    className=" d-none"
                                                    ref={el => categoriesRef.current[ccc.id] = el}
                                                >
                                                    <input
                                                        type="text"
                                                        className="input-sm w-50"
                                                        style={{ marginLeft: '34px' }}
                                                        onKeyPress={e => e.code === 'Enter' && handleAddCategory(ccc.id)}
                                                        value={text}
                                                        onChange={e => setText(e.target.value)}
                                                    />
                                                    <IconButton
                                                        onClick={e => handleAddCategory(ccc.id)}
                                                    >
                                                        <CheckOutlinedIcon fontSize="small" />
                                                    </IconButton>
                                                    <IconButton
                                                        onClick={e => handleToggleRef(ccc.id)}
                                                    >
                                                        <CloseOutlinedIcon fontSize="small" />
                                                    </IconButton>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    ))}
                </Grid>
            ))}
        </>
    )
}
