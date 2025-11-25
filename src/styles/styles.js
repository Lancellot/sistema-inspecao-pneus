
export const styles = {

    // Estilos para Login/Menu
    containerLogin: {
        minHeight: '100vh',
        display: 'flex',
        padding: 0,
        background: '#f5f5f5',
        fontFamily: 'Arial, sans-serif'
    },
    logo: {
        width: '100%',
        height: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: '100px'
    },
    bglogin: {
        width: '40%',
        height: '100vh',
        background: 'linear-gradient(135deg, #222a64ff 0%, #192161 100%)'
    },

    containerLogin1: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #222a64ff 0%, #192161 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
    },
    cardLogin1: {
        background: 'white',
        borderRadius: '10px',
        padding: '30px',
        maxWidth: '500px',
        width: '100%',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
    },

    cardContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '15px'
    },

    cardLogin: {
        background: 'white',
        borderRadius: '10px',
        padding: '30px',
        maxWidth: '450px',
        width: '90%',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
        margin: '20px auto',

    },
    tituloLogin: {
        textAlign: 'center',
        color: '#333',
        marginBottom: '20px'
    }

    ,
    formDiv: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    }

    ,
    inputGroup: {
        display: 'flex',
        flexDirection: 'column'
    }

    ,
    label: {
        marginBottom: '5px',
        color: '#555',
        fontWeight: 'bold'
    }

    ,
    input: {
        padding: '10px',
        border: '2px solid #ddd',
        borderRadius: '5px',
        fontSize: '16px'
    }

    ,
    botao: {
        padding: '12px',
        background: '#667eea',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        fontWeight: 'bold'
    }

    ,
    botaoSecundario: {
        padding: '12px',
        background: '#f0f0f0',
        color: '#333',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        fontWeight: 'bold'
    }

    ,
    botaoMenu: {
        padding: '20px',
        background: '#667eea',
        color: 'white',
        border: 'none',
        borderRadius: '10px',
        fontSize: '18px',
        cursor: 'pointer',
        fontWeight: 'bold'
    }

    ,
    menuGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '15px',
        marginTop: '20px'
    }

    ,

    // Estilos para Tela de Inspeção
    containerInspecao: {
        minHeight: '100vh',
        background: '#192161',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
    }

    ,
    cardInspecao: {
        background: 'white',
        borderRadius: '8px',
        padding: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
        border: '2px solid #000'
    }

    ,
    tituloInspecao: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#000'
    }

    ,
    secaoSuperior: {
        marginBottom: '30px'
    }

    ,
    inputGroupInline: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '15px'
    }

    ,
    inputGroupBlock: {
        marginBottom: '15px'
    }

    ,
    labelInspecao: {
        fontWeight: 'bold',
        color: '#000',
        marginBottom: '5px',
        display: 'block'
    }

    ,
    inputInspecao: {
        flex: 1,
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '14px'
    }

    ,
    botaoCriar: {
        padding: '8px 20px',
        background: '#d3d3d3',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold'
    }

    ,
    gridPneus: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '30px',
        position: 'relative'
    }

    ,
    colunaPneus: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
    }

    ,
    pneuBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px'
    }

    ,
    botaoPneu: {
        padding: '10px 20px',
        background: 'white',
        border: '2px solid #000',
        borderRadius: '4px',
        fontWeight: 'bold',
        cursor: 'pointer',
        minWidth: '120px'
    }

    ,
    botaoAcao: {
        padding: '6px 12px',
        background: '#d3d3d3',
        border: 'none',
        borderRadius: '4px',
        fontSize: '12px',
        cursor: 'pointer',
        fontWeight: 'bold'
    }

    ,
    itemAdicionado: {
        fontSize: '11px',
        color: '#666',
        padding: '2px 8px',
        background: '#f0f0f0',
        borderRadius: '3px',
        marginTop: '3px'
    }

    ,
    conectoresVertical: {
        width: '2px',
        height: '100px',
        background: '#000'
    }

    ,
    conectoresHorizontal: {
        width: '180px',
        height: '2px',
        background: '#000',
        alignSelf: 'center',
        marginTop: '60px',
        marginBottom: '60px'
    }

    ,
    secaoObservacoes: {
        marginBottom: '20px'
    }

    ,
    textareaInspecao: {
        width: '100%',
        minHeight: '100px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '14px',
        resize: 'vertical',
        boxSizing: 'border-box'
    }

    ,
    botoesFinais: {
        display: 'flex',
        gap: '10px'
    }

    ,
    botaoFinalizar: {
        padding: '12px 30px',
        background: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer'
    }

    ,
    botaoVoltar: {
        padding: '12px 30px',
        background: '#6c757d',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer'
    }

    ,

    // Estilos para Histórico
    cardLargo: {
        background: 'white',
        borderRadius: '10px',
        padding: '30px',
        maxWidth: '900px',
        width: '100%',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
        maxHeight: '90vh',
        overflowY: 'auto'
    }

    ,
    listaInspecoes: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        marginBottom: '20px'
    }

    ,
    itemInspecao: {
        background: '#f8f9fa',
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid #e0e0e0'
    }

    ,
    summary: {
        cursor: 'pointer',
        color: '#667eea',
        fontWeight: 'bold',
        marginTop: '10px'
    }

    ,
    detalhes: {
        marginTop: '10px',
        paddingLeft: '10px'
    }

    ,
    detalhesPneu: {
        padding: '5px 0',
        borderBottom: '1px solid #eee'
    }

    ,
    textoVazio: {
        textAlign: 'center',
        color: '#999',
        padding: '40px'
    }

    ,
    relatorioBox: {
        background: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
    }
}

    ;