import React from 'react';
import GlobalNav from '../components/organisms/GlobalNav';
import FormGroup from '../components/molecules/FormGroup';
import Button from '../components/atoms/Button';
import Tag from '../components/atoms/Tag';
import styles from './Tela13_1_CriarProjeto.module.css';

function Tela13_1_CriarProjeto() {
  return (
    <div className={styles.pageContainer}>
      <GlobalNav />

      <div className={styles.formContainer}>
        <header className={styles.header}>
            <h1 className="heading-2">Criar Novo Projeto</h1>
            <p className="body-default" style={{color: 'var(--color-text-subtle)'}}>
                Descreva sua iniciativa para encontrar colaboradores e mentores.
            </p>
        </header>

        <div className={styles.cardForm}>
            {/* Seção 1: Informações Básicas */}
            <section className={styles.section}>
                <h3 className="heading-4">Sobre o Projeto</h3>
                <FormGroup label="Título do Projeto" placeholder="Ex: Redesign do App X..." fullWidth />
                
                {/* Simulação de Textarea */}
                <FormGroup 
                    label="Descrição Curta" 
                    placeholder="Resuma o objetivo do projeto em poucas linhas..." 
                    fullWidth 
                    style={{height: '100px'}}
                />
            </section>

            {/* Seção 2: Habilidades e Categoria */}
            <section className={styles.section}>
                <h3 className="heading-4">O que você precisa?</h3>
                <FormGroup label="Habilidades Necessárias" placeholder="Ex: React, Marketing..." fullWidth />
                
                {/* Tags de exemplo */}
                <div className={styles.tagsPreview}>
                    <Tag label="UI/UX" selected={true} />
                    <Tag label="Front-end" selected={true} />
                    <Tag label="+ Adicionar" />
                </div>
            </section>

            {/* Seção 3: Capa */}
            <section className={styles.section}>
                <h3 className="heading-4">Capa do Projeto</h3>
                <div className={styles.uploadPlaceholder}>
                    <span style={{fontSize: '24px'}}>📷</span>
                    <p>Arraste uma imagem ou clique para fazer upload</p>
                </div>
            </section>

            <div className={styles.actions}>
                <Button tipo="secundario">Cancelar</Button>
                <Button tipo="primario">Publicar Projeto</Button>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Tela13_1_CriarProjeto;