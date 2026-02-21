import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários com sucesso', () => {
        render(<PostComment />);

        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: { value: 'Primeiro comentário de teste' }
        });
        fireEvent.click(screen.getByTestId('btn-comentar'));

        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: { value: 'Segundo comentário de teste' }
        });
        fireEvent.click(screen.getByTestId('btn-comentar'));

        const itensComentario = screen.getAllByTestId('comentario-elemento');
        expect(itensComentario).toHaveLength(2);

        expect(screen.getByText('Primeiro comentário de teste')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário de teste')).toBeInTheDocument();
    });
});